var models = require('../models');
var {User, Room, Message} = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      Message.findAll()
        .then((messages) => {
          console.log(messgaes);

        });
      // models.messages.get((messages) => {
      //   res.send(messages);
      // });
      // res.end();
    },
    post: function (req, res) {
      User.findAll({
        attributes: ['userid'],
        where: {
          username: req.body.username
        }
      })
        .then((userid) => {
          Room.findAll({
            attributes: ['roomid'],
            where: {
              roomname: req.body.roomname
            }
          })
            .then((roomid) => {
              Message.create({messagtext: req.body.message, username: userid, roomname: roomid});
            })
            .then(() => {
              res.end();
            });
        });
      // models.messages.post(req.body);
      // res.end();
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((users) => {
        res.send(users);
      });
    },
    post: function (req, res) {
      User.create({ username: req.body.username })
        .then(() => {
          res.end();
        });
      // models.users.post(req.body.username);
      // res.end();
    }
  },

  rooms: {
    // Ditto as above
    get: function (req, res) {
      models.rooms.get((rooms) => {
        res.send(rooms);
      });
    },
    post: function (req, res) {
      Room.create({ roomname: req.body.roomname})
        .then(() => {
          res.end();
        });
      // models.rooms.post(req.body.roomname);
      // res.end();
    }
  }

};

