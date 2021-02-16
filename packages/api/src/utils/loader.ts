import path from 'path'
import grpc from 'grpc'
import { promisify } from 'util'
import { loaderConfig } from '../config/grpc-config'
const protoLoader = require('@grpc/proto-loader')

interface LoadProps {
  serviceName: string
  fileName: string
  address: string
  credentials?: any
}
export const load = ({
  serviceName,
  fileName,
  address,
  credentials = grpc.credentials.createInsecure()
}:LoadProps
) => {
  const protoDef = protoLoader.loadSync(
    path.resolve(__dirname, '..', '..', '..', 'protos', `${fileName}.proto`),
    loaderConfig
  )

  const proto = grpc.loadPackageDefinition(protoDef)

  const client = new proto[serviceName](address, credentials)

  // Promisify all client methods
  Object.entries(client.__proto__).map(([prop, value]: [string, any]) => {
    if (value.originalName !== undefined) {
      client[prop] = promisify(value)
    }
  })

  return client
}
