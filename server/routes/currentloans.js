const currentloans = require('../controllers/currentloans.js')

const currentLoansRoutes = app => {
  app.get('/getLoans', currentloans.getLoans),
  app.post('/addLoan', currentloans.addLoan),
  app.post('/deleteLoan', currentloans.deleteLoan)
}

module.exports = currentLoansRoutes;