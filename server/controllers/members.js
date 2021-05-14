const members = require('../database-requests/members.js')

module.exports = {
  getMembers: (req, res) => {
    members.getMembers((error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  },

  addMember: (req, res) => {
    const lastName = req.body.lastName;
    const firstName = req.body.firstName;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;
    members.addMember(lastName,firstName,address,phoneNumber,(error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  },

  deleteMember: (req, res) => {
    const id = req.body.memberId;
    members.deleteMember(id, (error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  }
}