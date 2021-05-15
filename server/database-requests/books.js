const db = require('../database.js');

module.exports = {
  getBooks: async (result) => {
   db.query(
        "SELECT *, (SELECT loanId FROM currentloan WHERE bookId = b.bookId) AS loanId FROM book b",
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result({ errorMessage: "Wystąpił błąd!" }, []);
            return;
          }
          result(null, res);
        }
      );
  },

  addBook: async (isbn, title, author, publishYear, category, result) => {
    db.query(
         `INSERT INTO book VALUES (null, '${isbn}', '${title}', '${author}', ${publishYear}, '${category}')`,
         (err, res) => {
           if (err) {
             console.log("error: ", err);
             result({ errorMessage: "Wystąpił błąd!" }, []);
             return;
           }
           result(null, res);
         }
       );
   },

   deleteBook: async (id, result) => {
    db.query(
         `DELETE FROM currentloan WHERE bookId=${id}`,
         (err, res) => {
           if (err) {
             console.log("error: ", err);
             result({ errorMessage: "Wystąpił błąd!" }, []);
             return;
           }
           db.query(
            `DELETE FROM book WHERE bookId=${id}`,
            (err, res) => {
              if (err) {
                console.log("error: ", err);
                result({ errorMessage: "Wystąpił błąd!" }, []);
                return;
              }
              result(null, res);
            }
          );
         }
       );
   }
} 