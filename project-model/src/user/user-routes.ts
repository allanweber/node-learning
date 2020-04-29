import { Router } from 'express'
import { getUsers, getUserById } from './user-handler'

const route = Router()

export default (app: Router) => {
  app.use('/v1', route)
  route.get('/users', getUsers)
  route.get('/users/:id', getUserById)
}
