const books = require('../controllers/books.js')

const booksRoutes = app => {
  app.get('getBooks', books.getBooks)
}

module.exports = booksRoutes;