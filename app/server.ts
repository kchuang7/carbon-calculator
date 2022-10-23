import express, { Express, Request, Response } from 'express'
import path from 'path'

const app: Express = express()
const port: number = 80

app.use(express.static('public'))

app.get('/', (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port, (): void => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
