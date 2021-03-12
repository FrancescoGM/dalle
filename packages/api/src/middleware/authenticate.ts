import { Request, Response, NextFunction } from 'express'
import { AuthenticateClient } from '../services/Authenticate'

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization
    const { isValid, id } = await AuthenticateClient.authenticateJWT({ token })

    if (isValid) {
      req.body.key = id
      return next()
    } else {
      return res.status(400).json({ error: 'Your token expired!' })
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}
