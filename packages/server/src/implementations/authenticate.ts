import { ServerUnaryCall, sendUnaryData } from 'grpc'
import User from '../schemas/user'
import authConfig from '../config/auth'
import jwt from 'jsonwebtoken'

export default {
  async loginJWT(
    { request }: ServerUnaryCall<any>,
    callback: sendUnaryData<any>
  ) {
    const { email, password } = request
    const user = await User.findOne({ email })
    if (!user)
      return callback({ name: 'error', message: 'User not found' }, null)
    if (!(await user.compareHash(password)))
      return callback({ name: 'error', message: 'Invalid password' }, null)

    if (user._id) {
      callback(null, { token: User.generateJWT(user._id) })
    }
  },
  async authenticateJWT(
    { request }: ServerUnaryCall<any>,
    callback: sendUnaryData<any>
  ) {
    const authHeader = request.token
    if (!authHeader)
      return callback({ name: 'error', message: 'Token não informado!' }, null)

    const parts: any[] = authHeader.split(' ')

    if (parts.length !== 2)
      return callback({ name: 'error', message: 'Token malformado!' }, null)

    const [scheme, token] = parts

    if (scheme !== 'Bearer')
      return callback({ name: 'error', message: 'Bearer malformado!' }, null)

    jwt.verify(token, authConfig.JWT_HASH, (err: any, decoded: any) => {
      if (err) return callback(null, { isValid: false })

      return callback(null, { isValid: true, id: decoded.id })
    })
  }
}
