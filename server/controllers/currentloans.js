const currentloans = require('../database-requests/currentloans.js')

module.exports = {
  getLoans: (req, res) => {
    currentloans.getLoans((error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  },

  addLoan: (req, res) => {
    const memberId = req.body.memberId;
    const bookId = req.body.bookId;
    const loanDate = req.body.loanDate;
    const dueDate = req.body.dueDate;
    currentloans.addLoan(memberId,bookId,loanDate,dueDate,(error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  },

  deleteLoan: (req, res) => {
    const id = req.body.loanId;
    currentloans.deleteLoan(id,(error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  }
}