import { Router } from 'express'
import userApi from '../user/user-routes'

export default () => {
  const app = Router()
  userApi(app)
  return app
}
