import { Request, Response } from 'express'
import request from 'request'

const getUsers = (req: Request, res: Response) => {
  request.get('http://localhost:3001/user', (error, _, body) => {
    if (error) {
      return console.log(error)
    }
    return res.json(JSON.parse(body))
  })
}

const getUserById = (req: Request, res: Response) => {
  const { params : {id} } = req

  request.get(`http://localhost:3001/user/${id}`, (error, response, body) => {
    if (error) {
      return console.log(error)
    }
    return res.json(JSON.parse(body))
  })
}

export { getUsers, getUserById }
