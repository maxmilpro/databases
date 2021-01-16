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
    post: function ({message, username, roomname}) {
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
    get: function (cb) {
      db.connection.query('SELECT username FROM users', [], (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log('Retrieved the users: ', results);
          cb(results);
        }
      });
    },
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
    get: function (cb) {
      db.connection.query('SELECT roomname FROM rooms', [], (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log('Retrieved the rooms: ', results);
          cb(results);
        }
      });
    },
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