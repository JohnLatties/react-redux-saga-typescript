import express from 'express'
import cors from 'cors'
import setupRoutes from './setupRoutes'
import setupStatic from './setupStatic'

const app = express()
app.use(express.json())
app.use(cors({ origin: '*' }))
setupRoutes(app)
setupStatic(app)


export default app
