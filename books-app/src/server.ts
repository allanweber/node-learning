import express from 'express'
import chalk from 'chalk'
import morgan from 'morgan'
import path from 'path'
import sql from 'mssql'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import bodyParser from 'body-parser'
import booksRouter from './routes/book-routes'
import authRouter from './routes/auth-routes'

const app = express()
const port = 3000

const config = {
  user: 'sa',
  password: '#A11anW3b3r',
  server: 'localhost',
  database: 'books',
}

sql.connect(config).catch((error) => console.log(chalk.red(error)))

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({ secret: 'library' }))

app.use('/books', booksRouter)
app.use('/auth', authRouter)

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
