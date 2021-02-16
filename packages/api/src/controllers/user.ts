import { Request, Response } from 'express'
import { UserClient } from '../services/User'

export async function create(req: Request, res: Response) {
  try {
    const body = req.body
    const user = await UserClient.create(body)
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json(error)
  }
}
export async function update(req: Request, res: Response) {
  try {
    const id = req.params.id
    const user = await UserClient.update({ id, user: req.body })
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json(error)
  }
}
export async function read(req: Request, res: Response) {
  try {
    const id = req.params.id
    const user = await UserClient.read({ id })
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json(error)
  }
}
