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
  }
} 