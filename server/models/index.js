var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      db.connection.query('SELECT messages.messagetext, users.username, rooms.roomname FROM messages, users, rooms WHERE messages.userid = users.userid AND messages.roomid = rooms.roomid', [], (err, results) => {
        if (err) {
          // console.error('Could not retrieve the messages!');
          throw err;
        } else {
          console.log('Retrieved the messages: ', results);
          cb(results);
        }
      });

    }, // a function which produces all the messages
    post: function ({message, username, roomname}) { // a function which can be used to insert a message into the database
      // query the users table to find the userid for the provided username
      // 'INSERT INTO messages (messagetext, userid, roomid) VALUES (message, SELECT userid from users where username = ?, SELECT roomid from rooms where roomname = ?)
      var queryString = 'INSERT INTO messages (messagetext, userid, roomid) VALUES (?, (SELECT userid from users where username = ?), (SELECT roomid from rooms where roomname = ?))';
      var queryArgs = [message, username, roomname];
      db.connection.query(queryString, queryArgs, (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log('Message added!');
        }
      });
    }
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
    post: function (roomname) {
      var queryString = 'INSERT into rooms (roomname) VALUES (?)';
      var queryArgs = [roomname];
      db.connection.query(queryString, queryArgs, (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log('Room added!');
        }
      });
    }
  }

};



// dbConnection.query(queryString, queryArgs, function(err, results)