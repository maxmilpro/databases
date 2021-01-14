var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.connection.query('SELECT messages.messagetext, users.username, rooms.roomname FROM messages, users, rooms WHERE messages.userid = users.userid AND messages.roomid = rooms.roomid', [], (err, results) => {
        if (err) {
          // console.error('Could not retrieve the messages!');
          throw err;
        } else {
          console.log('Retrieved the messages: ', results);
        }
      });

    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username) {
      var queryString = 'INSERT into users (username) VALUES (?)';
      var queryArgs = [username];
      db.connection.query(queryString, queryArgs, (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log('User added!');
        }
      });
    }
  },

  rooms: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }

};



// dbConnection.query(queryString, queryArgs, function(err, results)