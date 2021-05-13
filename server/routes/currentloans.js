const currentloans = require('../controllers/currentloans.js')

const currentLoansRoutes = app => {
  app.get('getCurrentLoans', currentloans.getCurrentLoans)
}

module.exports = currentLoansRoutes;