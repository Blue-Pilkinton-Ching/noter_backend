import { Router } from 'express'

export const route = Router()

route.get('/', (req, res) => {
  res.send('Noter website api backend!')
})
