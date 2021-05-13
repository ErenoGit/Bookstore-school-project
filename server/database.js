const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'library',
    password: 'zaq1@WSX',
  });
  
  con.connect((err) => {
    if(err) throw err;
    console.log("Połączono z bazą danych!");
  });

  module.exports = con;