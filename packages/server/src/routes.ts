import express, { Request, Response } from 'express'
const routes = express.Router()

routes.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Olá Mundo' })
})

export default routes
