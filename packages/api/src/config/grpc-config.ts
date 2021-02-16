import { Options } from '@grpc/proto-loader'

export const loaderConfig: Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}
