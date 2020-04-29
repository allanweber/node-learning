import express from 'express'
import expressLoader from './express'

const app = express()

expressLoader(app)

const port = 3000

const listen = (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Listen on port ' + port)
  }
}

app.listen(port, listen)
