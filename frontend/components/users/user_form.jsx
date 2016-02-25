var React = require('react');
var UsersApiUtil = require('./../../util/users_api_util');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var UserForm = React.createClass({
  mixins: [History, LinkedStateMixin],

  getInitialState: function () {
    return ({
      name: "",
      email: "",
      password: "",
      image_url: "http://www.activprayer.com/media/profile_images/default.png"
    });
  },

  onSubmit: function (e) {
    e.preventDefault();
    var params = { user: this.state };

    UsersApiUtil.createUser(params, function () {
      this.history.pushState({}, "/");
    }.bind(this));
  },

  render: function() {
    return (
      <div className="auth-body">

        <section className="auth-form">
          <form onSubmit={ this.onSubmit }>

            <fieldset className="auth-form-fieldset group">
              <label>
                Name
                <input type="text" placeholder="Name" valueLink={this.linkState("name")}/>
              </label>

              <label>
                Email Address
                <input type="text" placeholder="you@yours.com" valueLink={this.linkState("email")}/>
              </label>

              <label>
                Password
                <input type="password" valueLink={this.linkState("password")} />
              </label>

              <button className="auth-form-button">Sign up</button>
            </fieldset>

            <img className="auth-image" src={window.goodeatsAssets.auth_photo_lobster}/>
          </form>

          <form className="hidden-form" onSubmit={ this.submit }>
            <input type="hidden" name="email" value="harry@aol.com" />
            <input type="hidden" name="password" value="123456" />
            <button className="auth-form-button">Sign in as Guest</button>
          </form>
        </section>
      </div>
    );
  },
});

module.exports = UserForm;
