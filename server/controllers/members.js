const members = require('../database-requests/members.js')

module.exports = {
  getMembers: (req, res) => {
    members.getMembers((error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  },

  addMember: (req, res) => {
    const lastname = req.body.lastname;
    const firstname = req.body.firstname;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;
    members.addMember(lastname,firstname,address,phoneNumber,(error, data) => {
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