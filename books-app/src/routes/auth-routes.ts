import express from 'express'
import { MongoClient } from 'mongodb'
const debug = require('debug')('app:auth-router')

const authRouter = express.Router()

authRouter.route('/signup').post((req, res) => {

  debug(req.body)

  res.send('signup route')
})

export = authRouter
