const currentloans = require('../database-requests/currentloans.js')

module.exports = {
  getCurrentLoans: (req, res) => {
    currentloans.getCurrentLoans((error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  }
}