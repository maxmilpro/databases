var MessagesView = {

  $chats: $('#chats'),
  $refresh: $('.refresh'),
  $username: $('.username'),

  initialize: function() {
    Messages.fetch();
    MessagesView.$refresh.on('click', MessagesView.handleRefresh);
    MessagesView.$chats.on('click', '.username', MessagesView.handleAddFriend);
  },

  renderMessage: function(message) {
    // if there is a username and text in the message
    if (message['username'] !== undefined && message['text'] !== undefined) {
      var selectedRoom = RoomsView.$select.val() || 'lobby';
      // if the message's room is equal to the selected room
      if (message.roomname === selectedRoom) {
        //if the current message's username is in the friends list
        if (_.contains(Friends.list, message.username)) {
          // compile the message with bold text
          var compiled = MessageView.renderFriend(message);
          //otherwise
        } else {
          // compile the message with regularly text
          var compiled = MessageView.render(message);
        }
      }
    }
    //append rendered message to the chats element
    MessagesView.$chats.append(compiled);
  },

  handleRefresh: function() {
    Messages.fetch();
  },

  handleAddFriend: function() {
    console.log('clicked a username');
    Friends.toggleStatus(this.innerText);
  }

};