var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $addRoom: $('#add-room'),

  initialize: function() {
    //access the messages in the database
    Rooms.fetch();
    RoomsView.$select.on('change', RoomsView.handleRoomSelect);
    RoomsView.$button.on('click', RoomsView.handleAddRoom);
  },

  renderRoom: function(room) {
    // if the room is lobby
    if (room === 'lobby') {
      // render as the default
      var compiled = _.template(`<option value='<%- roomName %>' selected> <%-roomName%>  </option>`);
    // otherwise
    } else {
      var compiled = _.template(`<option value='<%- roomName %>'> <%-roomName%>  </option>`);
    }
    RoomsView.$select.append(compiled({'roomName': room}));
  },

  handleRoomSelect: function () {
    console.log('new room selected');
    Messages.fetch();
  },

  handleAddRoom: function() {
    Rooms.add();
  }
};





