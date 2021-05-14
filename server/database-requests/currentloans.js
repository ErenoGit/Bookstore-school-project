const db = require('../database.js');

module.exports = {
  getLoans: async (result) => {
   db.query(
        "SELECT loanId, (SELECT firstName FROM member WHERE memberId = c.memberId) AS firstName, (SELECT lastName FROM member WHERE memberId = c.memberId) AS lastName, (SELECT title FROM book WHERE bookId = c.bookId) AS title, loanDate, dueDate FROM currentloan c",
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
      `INSERT INTO currentloan VALUES (null, '${memberId}', '${bookId}', '${loanDate}', '${dueDate}')`,
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
         `DELETE FROM currentloan WHERE loanId=${id}`,
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