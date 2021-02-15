import grpc from 'grpc'
import path from 'path'
import './database'
import { Options } from '@grpc/proto-loader'
const protoLoader = require('@grpc/proto-loader')
import User from './implementations/users'

require('dotenv').config({
  path: process.env.NODE_ENV === 'dev' ? '.env.development' : '.env.production'
})
const options: Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, '..', '..', 'protos', 'User.proto'),
  options
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
