import { Request, Response } from 'express'
import { AuthenticateClient } from '../services/Authenticate'

export async function loginJWT(req: Request, res: Response) {
  try {
    const { email, password } = req.body
    const token = await AuthenticateClient.loginJWT({ email, password })
    return res.status(200).json(token)
  } catch (error) {
    return res.status(400).json(error)
  }
}
export async function authenticateJWT(req: Request, res: Response) {
  try {
    const token = req.headers.authorization
    const isValid = await AuthenticateClient.authenticateJWT({ token })
    return res.status(200).json(isValid)
  } catch (error) {
    return res.status(400).json(error)
  }
}
