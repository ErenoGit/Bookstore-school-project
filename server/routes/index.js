const booksRoutes = require('./books.js')
const membersRoutes = require('./members.js')
const currentLoansRoutes = require('./currentloans.js')

const loadRoutes = app => {
  booksRoutes(app),
  membersRoutes(app),
  currentLoansRoutes(app)
}

module.exports = loadRoutes;