import { load } from '../utils/loader'

export const AuthenticateClient = load({
  serviceName: 'AuthenticateService',
  fileName: 'Authenticate',
  address: 'localhost:3333'
})
