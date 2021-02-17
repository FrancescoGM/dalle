import { Router } from 'express'
import * as user from './controllers/user'
import * as auth from './controllers/authenticate'
const routes = Router()

routes.post('/user/create', user.create)
routes.get('/user/read/:id', user.read)
routes.put('/user/update/:id', user.update)

routes.post('/auth/loginJWT', auth.loginJWT)
routes.get('/auth/authenticateJWT', auth.authenticateJWT)

export default routes
