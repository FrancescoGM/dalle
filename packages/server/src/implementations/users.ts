import { ServerUnaryCall, sendUnaryData } from 'grpc'
import User from '../schemas/user'

interface Create {
  name: string
  surname: string
  password: string
  cpf: string
  email: string
  dateOfBirth: Date
}
interface Update {
  id: string
  name?: string
  surname?: string
  password?: string
  cpf?: string
  email?: string
  dateOfBirth?: Date
}
interface SignIn {
  email: string
  password: string
}

export default {
  async read({ request }: ServerUnaryCall<any>, callback: sendUnaryData<any>) {
    const { id } = request
    const user = await User.findById({ id })
    callback(null, user)
  },
  async create(
    { request }: ServerUnaryCall<any>,
    callback: sendUnaryData<any>
  ) {
    const body: Create = request
    const user = await User.create(body)
    callback(null, { user })
  },
  async update(
    { request }: ServerUnaryCall<any>,
    callback: sendUnaryData<any>
  ) {
    const body: Update = request
    const user = await User.update(body)
    callback(null, { user })
  },
  async loginUser(
    { request }: ServerUnaryCall<any>,
    callback: sendUnaryData<any>
  ) {
    const { email, password }: SignIn = request
    const user = await User.findOne({ email })

    if (!user)
      return callback({ name: 'error', message: 'User not found' }, null)
    if (!(await user.compareHash(password)))
      return callback({ name: 'error', message: 'Invalid password' }, null)

    if (user.id) {
      callback(null, { token: User.generateToken(user.id) })
    }
  }
}
