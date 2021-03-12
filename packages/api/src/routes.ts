import { Router } from 'express'
import * as user from './controllers/user'
import * as auth from './controllers/authenticate'
import * as post from './controllers/post'
import { authenticate } from './middleware/authenticate'
const routes = Router()

routes.post('/user/create', user.create)
routes.get('/user/read/:id', user.read)
routes.put('/user/update/:id', user.update)

routes.post('/auth/loginJWT', auth.loginJWT)
routes.get('/auth/authenticateJWT', auth.authenticateJWT)

routes.post('/post/create', authenticate, post.create)
routes.get('/post/list', authenticate, post.list)
routes.get('/post/listWhereId', authenticate, post.listWhereId)

export default routes
