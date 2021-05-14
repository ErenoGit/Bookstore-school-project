const members = require('../controllers/members.js')

const membersRoutes = app => {
  app.get('/getMembers', members.getMembers),
  app.get('/addMember', members.addMember),
  app.get('/deleteMember', members.deleteMember)
}

module.exports = membersRoutes;