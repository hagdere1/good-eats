var React = require('react');
var History = require('react-router').History;
var UsersStore = require('../../stores/users_store');
var UsersApiUtil = require('../../util/users_api_util');

var UserForm = React.createClass({
  mixins: [History],

  submit: function (e) {
    e.preventDefault();
  },

  render: function() {

    return (
      <form onSubmit={ this.submit }>

        <h1>Sign Up!</h1>

        <label>
          Name
          <input type="text" name="name" />
        </label>

        <label>
          Email
          <input type="text" name="email" />
        </label>

        <label>
          Password
          <input type="password" name="password" />
        </label>

        <button>Join!</button>
      </form>
    );


    <div className="auth-body">

      <section className="auth-form">
        <form onSubmit={ this.submit }>
          <fieldset className="auth-form-fieldset group">
            <label>
              Name
              <input type="text" name="name" placeholder="Name"/>
            </label>

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

          <img className="sign-up-image" src="/assets/banner/lobster.jpg"/>
        </form>

        <form onSubmit={ this.submit }>
          <input type="hidden" name="email" value="harry@aol.com" />
          <input type="hidden" name="password" value="123456" />
          <button className="auth-form-button">Sign in as Guest</button>
        </form>
      </section>
    </div>





  },

});

module.exports = UserForm;
