const books = require('../database-requests/books.js')

module.exports = {
  getBooks: (req, res) => {
    books.getBooks((error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  },

  addBook: (req, res) => {
    const isbn = req.params.isbn;
    const title = req.params.title;
    const author = req.params.author;
    const publishYear = req.params.publishYear;
    const category = req.params.category;
    books.addBook(isbn,title,author,publishYear,category,(error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  },

  deleteBook: (req, res) => {
    const id = req.params.id;
    books.deleteBook(id,(error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  }
}