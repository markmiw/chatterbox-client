// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    // TODO: Perform any work which needs to be done
    // when this view loads.
    //MesssagesView.renderMessage();
  },

  render: function() {
    // TODO: Render _all_ the messages.

    for (let i = 0; i < Messages.data.length; i++) {
      // Messages.data[i].username;
      // Messages.data[i].text;
      MessagesView.renderMessage(Messages.data[i]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // invoke the messageView.js
    var compiled = MessageView.render(message);
    $("#chats").append(compiled);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};