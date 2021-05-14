const currentloans = require('../controllers/currentloans.js')

const currentLoansRoutes = app => {
  app.get('/getCurrentLoans', currentloans.getCurrentLoans),
  app.post('/addLoan', currentloans.addLoan),
  app.post('/deleteLoan', currentloans.deleteLoan)
}

module.exports = currentLoansRoutes;