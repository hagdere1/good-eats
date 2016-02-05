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
      <div className="auth-body">

        <section className="auth-form">
          <form onSubmit={ this.submit }>
            <fieldset className="auth-form-fieldset group">
              <label>
                Email Address
                <input type="text" name="email" placeholder="you@yours.com"/>
              </label>

              <label>
                Password
                <input type="password" name="password" />
              </label>

              <button className="auth-form-button">Sign in</button>
            </fieldset>

            <img className="auth-image" src={window.goodeatsAssets.auth_photo_burger}/>
          </form>

          <form onSubmit={ this.submit }>
            <input type="hidden" name="email" value="harry@aol.com" />
            <input type="hidden" name="password" value="123456" />
            <button className="auth-form-button">Sign in as Guest</button>
          </form>
        </section>
      </div>
    );
  },

});

module.exports = SessionForm;
