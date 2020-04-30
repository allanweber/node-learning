import express from 'express'
import sql from 'mssql'

// const debug = require('debug')('app:book-router')

const booksRouter = express.Router()

booksRouter.route('/').get((req, res) => {
  (async function () {
    const request = new sql.Request()
    const { recordset } = await request.query('select * from books')
    res.send(recordset)
  })()
})

booksRouter.route('/:id')
  .all((req: any, res, next) => {
    (async function () {
      const { id } = req.params
      const request = new sql.Request()
      const { recordset } = await request.input('id', id).query('select * from books where id = @id')
      req.book = recordset[0]
      next()
    })()
  })
  .get((req: any, res) => {
    res.send(req.book)
  })

export = booksRouter
