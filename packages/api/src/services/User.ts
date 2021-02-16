import { load } from '../utils/loader'

export const UserClient = load({
  serviceName: 'UserService',
  fileName: 'User',
  address: 'localhost:3333'
})
