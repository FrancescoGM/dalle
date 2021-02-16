import grpc from 'grpc'
import path from 'path'
import './database'
import './config/dotenv'
const protoLoader = require('@grpc/proto-loader')
import User from './implementations/users'
import { LoaderConfig } from './config/grpc-config'

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, '..', '..', 'protos', 'User.proto'),
  LoaderConfig
)
const UserProto = grpc.loadPackageDefinition(packageDefinition) as any

const server = new grpc.Server()
server.addService(UserProto.UserService.service, User)
server.bind(
  `${process.env.SERVER_IP}:${process.env.SERVER_PORT}`,
  grpc.ServerCredentials.createInsecure()
)
console.log(
  `Server runnint at ${process.env.SERVER_IP}:${process.env.SERVER_PORT}`
)
server.start()
