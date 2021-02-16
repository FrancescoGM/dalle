import { Router } from 'express'
import * as user from './controllers/user'
const routes = Router()

routes.post('/user/create', user.create)
routes.get('/user/read/:id', user.read)
routes.put('/user/update/:id', user.update)

export default routes
