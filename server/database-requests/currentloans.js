const db = require('../database.js');

module.exports = {
  getCurrentLoans: async (result) => {
   db.query(
        "SELECT * FROM currentloan",
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