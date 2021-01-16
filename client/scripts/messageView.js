
var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username">
          <%- username %>
        </div>
        <div>
          <%- text %>
        </div>
      </div>
    `),

  renderFriend: _.template(`
      <div class="chat">
        <div class="username">
          <b><%- username %></b>
        </div>
        <div>
          <b><%- text %></b>
        </div>
      </div>
`)

};

