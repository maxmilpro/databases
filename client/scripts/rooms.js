var Rooms = {

  fetch: function() {
    $.ajax({
      url: 'http://127.0.0.1:3000/classes/rooms',
      type: 'GET',
      // data: { order: '-createdAt' },
      // contentType: 'application/json',
      success: function(data) {
        RoomsView.$select.empty();
        for (room of data) {
          console.log('room: ', room);
          RoomsView.renderRoom(room.roomname);
        }
      },
      error: function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
    // Parse.readAll((data) => {
    //   // call MessageView.render on the data
    //   console.log('chatterbox: Rooms retrieved');
    //   for (message of data ) {
    //     if (message.roomname && !_.contains(Rooms.list, message.roomname)) {
    //       Rooms.list.push(message.roomname);
    //     }
    //   }
    //   RoomsView.$select.empty();
    //   for (room of Rooms.list) {
    //     RoomsView.renderRoom(room);
    //   }
    // });
  },

  add: function() {
    Rooms.list.push(RoomsView.$addRoom.val());
    RoomsView.$select.empty();
    for (room of Rooms.list) {
      RoomsView.renderRoom(room);
    }
  },

  list: [],

  addRoom: function(room) {
    var roomData = {
      roomname: room
    };
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://127.0.0.1:3000/classes/rooms',
      type: 'POST',
      data: JSON.stringify(roomData),
      contentType: 'application/json',
      success: () => {
        Rooms.fetch();
        console.log('Room added to database');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to add room to DB', data);
      }
    });
  }

};

