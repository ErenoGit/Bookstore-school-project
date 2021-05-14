const members = require('../controllers/members.js')

const membersRoutes = app => {
  app.get('/getMembers', members.getMembers),
  app.post('/addMember', members.addMember),
  app.post('/deleteMember', members.deleteMember)
}

module.exports = membersRoutes;