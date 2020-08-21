import { Express, Router } from 'express'
import room from '../routes'

export default (app: Express): void => {
  const router = Router()
  app.use('',router)
  room(router)
}
