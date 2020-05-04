import express from 'express'
import { MongoClient } from 'mongodb'
import passport from 'passport'
const debug = require('debug')('app:auth-router')

const authRouter = express.Router()

authRouter.route('/signUp').post((req, res) => {
  req.logIn(req.body, () => {
    res.redirect('/auth/profile')
  })
  res.end()
})

authRouter.route('/signIn').post((req, res) => {
  passport.authenticate('local', {
    successRedirect: '/auth/profile',
    failureRedirect: '/',
    successMessage: 'Authenticated',
    failureMessage: 'Invalid login',
  })
  res.end()
})

authRouter
  .route('/profile')
  .all((req, res, next) => {
    if(req.user) {
      next()
    } else {
      res.status(401).send('Unauthorized')
    }
  })
  .get((req, res) => {
    res.json(req.body)
  })

export = authRouter
