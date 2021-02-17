import grpc from 'grpc'
import path from 'path'
import './database'
import './config/dotenv'
import User from './implementations/users'
import Authenticate from './implementations/authenticate'
import { LoaderConfig } from './config/grpc-config'
const protoLoader = require('@grpc/proto-loader')

const UserDefinition = protoLoader.loadSync(
  path.resolve(__dirname, '..', '..', 'protos', 'User.proto'),
  LoaderConfig
)
const AuthenticateDefinition = protoLoader.loadSync(
  path.resolve(__dirname, '..', '..', 'protos', 'Authenticate.proto'),
  LoaderConfig
)
const UserProto = grpc.loadPackageDefinition(UserDefinition) as any
const AuthenticateProto = grpc.loadPackageDefinition(AuthenticateDefinition) as any

const server = new grpc.Server()

server.addService(AuthenticateProto.AuthenticateService.service, Authenticate)
server.addService(UserProto.UserService.service, User)

server.bind(
  `${process.env.SERVER_IP}:${process.env.SERVER_PORT}`,
  grpc.ServerCredentials.createInsecure()
)
console.log(
  `Server runnint at ${process.env.SERVER_IP}:${process.env.SERVER_PORT}`
)
server.start()
