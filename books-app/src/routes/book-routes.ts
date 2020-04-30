import express from 'express'

const booksRouter = express.Router()

const books: any[] = [
  {
    id: 'eb1883a4-6724-5627-a56c-814ba74e091b',
    title: 'Katlyn',
    genre: 'Toby_Stanton@hotmail.com',
    author: ' Ole Ferry',
    read: false,
  },
  {
    id: 'bb0a5de7-4255-5433-8d51-e02e27c1fc2c',
    title: 'Yolanda',
    genre: 'Stevie77@yahoo.com',
    author: ' Nia Cole',
    read: true,
  },
  {
    id: 'd0a98b4f-c262-5225-9796-d35713d5adfd',
    title: 'Karli',
    genre: 'Alek_Brown22@hotmail.com',
    author: ' Brian Kilback',
    read: true,
  },
  {
    id: '99382976-096c-5e5b-b088-f3bcf1da3b22',
    title: 'Raheem',
    genre: 'Tyrel_Rogahn99@yahoo.com',
    author: ' Bianka Bruen',
    read: false,
  },
  {
    id: '15ea741c-26bb-5e98-864a-6e556cb2e793',
    title: 'Vilma',
    genre: 'Breanna80@gmail.com',
    author: ' Gerhard Rohan',
    read: true,
  },
  {
    id: '1b59619c-ffb6-5a1f-9e27-c7a1bda4642b',
    title: 'Genoveva',
    genre: 'Lavina76@hotmail.com',
    author: ' Rosella Wintheiser',
    read: false,
  },
  {
    id: 'c3db5807-1235-519f-afb2-da8f274bbc46',
    title: 'Tate',
    genre: 'Philip.OKeefe@hotmail.com',
    author: ' Markus Herzog',
    read: true,
  },
  {
    id: '08975b67-1a07-5682-9f1c-11e58c8e8623',
    title: 'Clifford',
    genre: 'Patricia_Ferry@gmail.com',
    author: ' Milton Gutmann',
    read: false,
  },
  {
    id: 'd5091293-c2e5-5bc2-98ea-e4d2b4ff1568',
    title: 'Addison',
    genre: 'Allan_Waelchi@yahoo.com',
    author: ' Madalyn Paucek',
    read: true,
  },
  {
    id: '6f924b01-2c73-5212-a143-37f13cf677b4',
    title: 'Maribel',
    genre: 'Griffin55@gmail.com',
    author: ' Elmo Collins',
    read: false,
  },
]

booksRouter.route('/').get((req, res) => {
  res.json(books)
})

booksRouter.route('/:id').get((req, res) => {
  const { params: { id } } = req

  const book = books.filter(bk => {
    return bk.id === id
  })

  res.json(book)
})

export = booksRouter
