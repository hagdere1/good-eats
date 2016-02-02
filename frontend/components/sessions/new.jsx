var React = require('react');
var History = require('react-router').History;
var SessionsApiUtil = require('./../../util/sessions_api_util');

var SessionForm = React.createClass({
  mixins: [History],

  submit: function (e) {
    e.preventDefault();

    var credentials = $(e.currentTarget).serializeJSON();
    SessionsApiUtil.login(credentials, function () {
      this.history.pushState({}, "/");
    }.bind(this));
  },


  render: function() {

    return (
      <div>
        <form onSubmit={ this.submit }>

          <h1>Sign in</h1>

          <label>
            Email
            <input type="text" name="email" />
          </label>

          <label>
            Password
            <input type="password" name="password" />
          </label>

          <button>Sign in</button>
        </form>

        <form onSubmit={ this.submit }>
          <input type="hidden" name="email" value="harry@aol.com" />
          <input type="hidden" name="password" value="123456" />
          <button>Sign in as Guest</button>
        </form>
      </div>
    );
  },

});

module.exports = SessionForm;
