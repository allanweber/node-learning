import passport from 'passport'
import express from 'express'
import localStrategy from './strategies/local.strategy';

export default (app: express.Application) => {
  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser((user: any, done) => {
    done(null, user)
  })

  passport.deserializeUser((user, done) => {
    done(null, user)
  })

  localStrategy()
}