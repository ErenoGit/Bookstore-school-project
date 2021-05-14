const members = require('../database-requests/members.js')

module.exports = {
  getMembers: (req, res) => {
    members.getMembers((error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  },

  addMember: (req, res) => {
    const lastname = req.params.lastname;
    const firstname = req.params.firstname;
    const address = req.params.address;
    const phoneNumber = req.params.phoneNumber;
    members.addMember(lastname,firstname,address,phoneNumber,(error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  },

  deleteMember: (req, res) => {
    const id = req.params.id;
    members.deleteMember(id, (error, data) => {
      if (error) res.status(500).send(error);
      else res.send(data);
    });
  }
}