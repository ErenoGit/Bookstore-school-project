const currentloans = require('../controllers/currentloans.js')

const currentLoansRoutes = app => {
  app.get('/getCurrentLoans', currentloans.getCurrentLoans),
  app.get('/addLoan', currentloans.addLoan),
  app.get('/deleteLoan', currentloans.deleteLoan)
}

module.exports = currentLoansRoutes;