import { load } from '../utils/loader'

export const PostClient = load({
  serviceName: 'PostService',
  fileName: 'Post',
  address: 'localhost:3334'
})
