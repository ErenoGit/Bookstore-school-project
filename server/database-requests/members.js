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
  }
} 