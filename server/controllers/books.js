const books = require('../database-requests/books.js')

module.exports = {
  getBooks: (req, res) => {
    books.getBooks((error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  },

  addBook: (req, res) => {
    const isbn = req.body.isbn;
    const title = req.body.title;
    const author = req.body.author;
    const publishYear = req.body.publishYear;
    const category = req.body.category;
    books.addBook(isbn,title,author,publishYear,category,(error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  },

  deleteBook: (req, res) => {
    const id = req.body.bookId;
    books.deleteBook(id,(error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  }
}