const currentloans = require('../database-requests/currentloans.js')

module.exports = {
  getCurrentLoans: (req, res) => {
    currentloans.getCurrentLoans((error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  },

  addLoan: (req, res) => {
    const memberId = req.params.memberId;
    const bookId = req.params.bookId;
    const loanDate = req.params.loanDate;
    const dueDate = req.params.dueDate;
    currentloans.addLoan(memberId,bookId,loanDate,dueDate,(error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  },

  deleteLoan: (req, res) => {
    const id = req.params.id;
    currentloans.deleteLoan(id,(error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  }
}