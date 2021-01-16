var Rooms = {

  fetch: function() {
    Parse.readAll((data) => {
      // call MessageView.render on the data
      console.log('chatterbox: Rooms retrieved');
      for (message of data.results) {
        if (message.roomname && !_.contains(Rooms.list, message.roomname)) {
          Rooms.list.push(message.roomname);
        }
      }
      RoomsView.$select.empty();
      for (room of Rooms.list) {
        RoomsView.renderRoom(room);
      }
    });
  },

  add: function() {
    Rooms.list.push(RoomsView.$addRoom.val());
    RoomsView.$select.empty();
    for (room of Rooms.list) {
      RoomsView.renderRoom(room);
    }
  },

  list: []

};

