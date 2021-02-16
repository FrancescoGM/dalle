import { ServerUnaryCall, sendUnaryData } from 'grpc'
import User from '../schemas/user'
import { SignIn } from '../models/User'
import { clearEmptyValues } from '../utils/clearEmptyValues'

export default {
  async read({ request }: ServerUnaryCall<any>, callback: sendUnaryData<any>) {
    try {
      const { id } = request
      const user = await User.findById(id)

      if (!user)
        return callback({ name: 'error', message: 'User not Found' }, null)

      return callback(null, {
        user: {
          ...user.toObject(),
          id: user._id
        }
      })
    } catch (error) {
      return callback({ name: 'error', message: error.message }, null)
    }
  },
  async create(
    { request }: ServerUnaryCall<any>,
    callback: sendUnaryData<any>
  ) {
    try {
      const user = await User.create(request)
      return callback(null, { user })
    } catch (error) {
      return callback({ name: 'error', message: error.message }, null)
    }
  },
  async update(
    { request }: ServerUnaryCall<any>,
    callback: sendUnaryData<any>
  ) {
    try {
      const data = clearEmptyValues(request.user)
      const id = request.id

      await User.updateOne({ _id: id }, data)
      const user = await User.findById(id)
      return callback(null, { user })
    } catch (error) {
      return callback({ name: 'error', message: error.message }, null)
    }
  }
  // async loginUser(
  //   { request }: ServerUnaryCall<any>,
  //   callback: sendUnaryData<any>
  // ) {
  //   const { email, password }: SignIn = request.user
  //   const user = await User.findOne({ email })

  //   if (!user)
  //     return callback({ name: 'error', message: 'User not found' }, null)
  //   if (!(await user.compareHash(password)))
  //     return callback({ name: 'error', message: 'Invalid password' }, null)

  //   if (user.id) {
  //     callback(null, { token: User.generateToken(user.id) })
  //   }
  // }
}
