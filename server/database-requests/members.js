const db = require('../database.js');

module.exports = {
  getMembers: async (result) => {
   db.query(
        "SELECT * FROM member",
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

  addMember: async (lastname, firstname, address, phoneNumber, result) => {
    db.query(
      `INSERT INTO currentloan VALUES (null, ${lastname}, ${firstname}, ${address}, ${phoneNumber})`,
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

   deleteMember: async (id, result) => {
    db.query(
         `DELETE FROM member WHERE memberID=${id}`,
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