var models = require('../models');
var {User, Room, Message} = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((messages) => {
        res.send(messages);
      });
      // res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((users) => {
        res.send(users);
      });
    },
    post: function (req, res) {
      models.users.post(req.body.username);
      res.end();
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
      models.rooms.post(req.body.roomname);
      res.end();
    }
  }

};

