const members = require('../database-requests/members.js')

module.exports = {
  getMembers: (req, res) => {
    members.getMembers((error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  }
}