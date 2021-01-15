CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userid INT NOT NULL AUTO_INCREMENT,
  username CHAR(20),
  PRIMARY KEY (userid),
  UNIQUE (username)
);
CREATE TABLE rooms (
  roomid INT NOT NULL AUTO_INCREMENT,
  roomname CHAR(20),
  PRIMARY KEY (roomid),
  UNIQUE (roomname)
);
CREATE TABLE messages (
  messageid INT NOT NULL AUTO_INCREMENT,
  messagetext CHAR(255),
  userid INT,
  roomid INT,
  PRIMARY KEY (messageid),
  FOREIGN KEY (userid) REFERENCES users(userid),
  FOREIGN KEY (roomid) REFERENCES rooms(roomid)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

