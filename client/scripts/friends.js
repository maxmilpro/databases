var Friends = {
  toggleStatus: function(username) {
    // when the user clicks on a username
    // add the username to Friends.list
    Friends.list.push(username);
    Messages.fetch();
  },

  list: []

};
