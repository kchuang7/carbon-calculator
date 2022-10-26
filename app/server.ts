import express, { Express, Request, Response } from 'express'
import path from 'path'
import calculations from './calculations.js'

const app: Express = express()
const port: number = 80

app.use(express.static('public'))

app.get('/', (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

/**
 * @swagger
 * /emissions/{category}/{subcategory}:
 *   get:
 *     summary: Retrieve emissions (kg CO2e/yr) for an input for a given subcategory.
 *     description: Performs emissions calculation using specified subcategory resource usage.
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         description: General emissions category.
 *         schema:
 *           type: string
 *       - in: path
 *         name: subcategory
 *         required: true
 *         description: Subcategory of emissions category.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The emissions per year calculation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 emissionsPerYear: number
 */
app.get('/emissions/:category/:subcategory', (req: Request, res: Response): void => {
  switch (req.params.category) {
    case 'housing': {
      const emissionsFunction: Function | undefined = {
        electricity: calculations.getEmissionsElectricity,
        naturalGas: calculations.getEmissionsNaturalGas,
        fuelOil: calculations.getEmissionsFuelOil,
        lfg: calculations.getEmissionsLfg,
        waste: calculations.getEmissionsWaste,
        water: calculations.getEmissionsWater
      }[req.params.subcategory]

      if (emissionsFunction === undefined) {
        res.sendStatus(400)
      } else {
        res.json({ emissionsPerYear: emissionsFunction(Number(req.query.usage)) })
      }
      break
    }
    case 'travel':
      if (!['vehicle', 'bus', 'metro', 'taxi', 'rail', 'flying'].includes(req.params.subcategory)) {
        res.sendStatus(400)
      } else {
        res.json({ emissionsPerYear: calculations.getEmissionsTravel(req.params.subcategory, Number(req.query.usage)) })
      }
      break
    default:
      res.sendStatus(400)
      break
  }
})

/**
 * @swagger
 * /emissions/{type}:
 *   get:
 *     summary: Calculate emissions offsets for specific behaviors.
 *     description: Performs emissions calculation using specified offset behavior.
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         description: Offset behavior.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The emissions per year calculation after offset is applied.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 emissionsPerYear: number
 */
app.get('/offset/:type', (req: Request, res: Response): void => {
  switch (req.params.type) {
    case 'ledLighting':
      res.json({ emissionsPerYear: calculations.applyLedLightingOffset(Number(req.query.currentEmissions), req.query.isReverse === 'true') })
      break
    case 'compost':
      res.json({ emissionsPerYear: calculations.applyCompostOffset(Number(req.query.currentEmissions), req.query.isReverse === 'true') })
      break
    default:
      res.sendStatus(400)
      break
  }
})

app.listen(port, (): void => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
