const books = require('../database-requests/books.js')

module.exports = {
  getBooks: (req, res) => {
    books.getBooks((error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  }
}