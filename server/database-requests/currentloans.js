const db = require('../database.js');

module.exports = {
  getLoans: async (result) => {
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
  },

  addLoan: async (memberId, bookId, loanDate, dueDate, result) => {
    db.query(
      `INSERT INTO currentloan VALUES (null, ${memberId}, ${bookId}, ${loanDate}, ${dueDate})`,
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
   
   deleteLoan: async (id, result) => {
    db.query(
         `DELETE FROM currentloan WHERE loanID=${id}`,
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