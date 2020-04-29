import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
import routes from './routes'

export default (app: express.Application) => {
  //Health Check endpoints
  app.get('/status', (req, res) => {
    res.status(200).end()
  })
  app.head('/status', (req, res) => {
    res.status(200).end()
  })

  app.use(cors())

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json())

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'))
  })

  app.use('/api', routes())

  //TODO: Search about errorHandler/Listeners


  //Not found
  app.get('**', (req, res) => {
    res.send('Not Found!!!')
  })
}
