var FormView = {

  $form: $('form'),
  $message: $('#message'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) { //controller
    // Stop the browser from submitting the form
    event.preventDefault();
    // create a message object
    var message = {
      // access username from DOM and store as a property of the message object
      username: App.username,
      // access text from DOM and store as a property of the message object
      text: FormView.$message.val(),
      // access roomname from DOM store as a properrty of the message object
      roomname: RoomsView.$select.val()
    };
    // add the message to the server by calling Messages.set with the object as an argument
    Messages.set(message);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};