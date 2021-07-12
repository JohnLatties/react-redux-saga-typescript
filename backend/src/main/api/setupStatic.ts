import express, { Express } from 'express'
import path from 'path'

export default (app: Express) => {
  app.use(express.static(path.join(__dirname, '../../../../frontend', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../../frontend/build', 'index.html'));
  })
}