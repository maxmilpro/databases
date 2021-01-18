var Sequelize = require('sequelize');
var sequelize = new Sequelize('chat', 'root', '', {
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = sequelize.define('user', {
  userid: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  username: Sequelize.STRING
});

var Room = sequelize.define('room', {
  roomid: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  roomname: Sequelize.STRING
});

var Message = sequelize.define('message', {
  messageid: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  messagetext: Sequelize.STRING,
});

User.hasOne(Message/*, {as: 'userid'}*/);
Room.hasOne(Message/*, {as: 'roomid'}*/);

User.sync();
Room.sync();
Message.sync();

module.exports.User = User;
module.exports.Room = Room;
module.exports.Message = Message;

