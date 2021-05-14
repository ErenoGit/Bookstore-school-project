const db = require('../database.js');

module.exports = {
  getBooks: async (result) => {
   db.query(
        "SELECT * FROM book",
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
         `INSERT INTO book VALUES (null, ${isbn}, ${title}, ${author}, ${publishYear}, ${category})`,
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
         `DELETE FROM book WHERE bookID=${id}`,
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
} 