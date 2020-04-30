import express from 'express'
import chalk from 'chalk'
import morgan from 'morgan'
import path from 'path'
import booksRouter from './routes/book-routes';

const app = express()
const port = 3000

app.use(morgan('tiny'))

app.use('/books', booksRouter)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

const listen = (err) => {
  if (err) {
    console.log(chalk.red(err))
  } else {
    console.log(`Listen on port ${chalk.green(port)}`)
  }
}

app.listen(port, listen)
