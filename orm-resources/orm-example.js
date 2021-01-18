/* You'll need to
 *   npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

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

/* Sequelize comes with built in support for promises
 * making it easy to chain asynchronous operations together */
User.sync()
  .then(function() {
    // Now instantiate an object and save it:
    return User.create({username: 'Jean Valjean'});
  })
  .then(function() {
    // Retrieve objects from the database:
    return User.findAll({ where: {username: 'Jean Valjean'} });
  })
  .then(function(users) {
    users.forEach(function(user) {
      console.log(user.username + ' exists');
    });
    sequelize.close();
  })
  .catch(function(err) {
    // Handle any error in the chain
    console.error(err);
    sequelize.close();
  });
