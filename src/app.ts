import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import { DataRoute } from './app/modules/data.route'

//parse application/json
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  const text = "Hello This is company API"
  res.send(text)
})

// application routes
app.use('/api/v1/weather', DataRoute)



export default app
