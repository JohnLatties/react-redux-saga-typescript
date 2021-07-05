import { Router } from 'express'
import path from 'path'
import { readdirSync } from 'fs'

export default (app) => {
  const router = Router()
  app.use('/', router)
  readdirSync(path.join(__dirname, 'routes')).map(async file => {
    if (file.includes('.route.')) {
      ; (await import(`./routes/${file}`)).default(router)
    }
  })
}
