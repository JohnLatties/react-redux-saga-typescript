import express from 'express'
import cors from 'cors'
import setupRoutes from './setupRoutes'

const app = express()
app.use(express.json())
app.use(cors({ origin: '*' }))
setupRoutes(app)

export default app
