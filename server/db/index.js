var Sequelize = require('sequelize');
var db = new Sequalize('chat', 'root', '');

var User = db.define('users', {
  userid: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  username: Sequelize.STRING
});

var Room = db.define('rooms', {
  roomid: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  roomname: Sequelize.STRING
});

var Message = db.define('messages', {
  messageid: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  messagetext: Sequelize.STRING,
  // userid: Sequelize.INTEGER,
  // roomid: Sequelize.INTEGER
});

User.hasMany(Message);
Message.belongsTo(User);

Room.hasMany(Message);
Message.belongsTo(Room);

User.sync();
Room.sync();
Message.sync();

module.exports.User = User;
module.exports.Room = Room;
module.exports.Message = Message;

