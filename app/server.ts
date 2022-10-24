import express, { Express, Request, Response } from 'express'
import path from 'path'
import calculations from './calculations.js'

const app: Express = express()
const port: number = 80

app.use(express.static('public'))

app.get('/', (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/emissions/housing/:subcategory', (req: Request, res: Response): void => {
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
})

app.get('/emissions/travel/:subcategory', (req: Request, res: Response): void => {
  if (!['vehicle', 'bus', 'metro', 'taxi', 'rail', 'flying'].includes(req.params.subcategory)) {
    res.sendStatus(400)
  } else {
    res.json({ emissionsPerYear: calculations.getEmissionsTravel(req.params.subcategory, Number(req.query.milesTraveled)) })
  }
})

app.listen(port, (): void => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
