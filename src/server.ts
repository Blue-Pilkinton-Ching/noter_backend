import express, { Request, Response } from 'express'
import cors from 'cors'
import { route } from './routes/route'

const app = express()
const PORT = process.env.PORT || 3002

app.use(cors())
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

app.use('/route', route)

app.get('/', (req: Request, res: Response) => {
  res.send('Noter app api backend!')
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
