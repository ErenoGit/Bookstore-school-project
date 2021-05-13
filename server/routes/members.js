const members = require('../controllers/members.js')

const membersRoutes = app => {
  app.get('getMembers', members.getMembers)
}

module.exports = membersRoutes;