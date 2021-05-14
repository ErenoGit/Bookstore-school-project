const books = require('../controllers/books.js')

const booksRoutes = app => {
  app.get('/getBooks', books.getBooks),
  app.post('/addBook', books.addBook),
  app.post('/deleteBook', books.deleteBook)
}

module.exports = booksRoutes;