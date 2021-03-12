import { Request, Response } from 'express'
import { PostClient } from '../services/Post'

export async function create(req: Request, res: Response) {
  try {
    const { post } = req.body
    const user = await PostClient.create({ post, user: req.body.key })
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json(error)
  }
}
export async function list(req: Request, res: Response) {
  try {
    const posts = await PostClient.list({})
    return res.status(200).json(posts)
  } catch (error) {
    return res.status(400).json(error)
  }
}
export async function listWhereId(req: Request, res: Response) {
  try {
    const id = req.body.key
    const user = await PostClient.listWhereId({ user: id })
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json(error)
  }
}
