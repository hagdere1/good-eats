var React = require('react');
var CurrentUserStore = require('./../stores/current_user_store');
var SessionsApiUtil = require('./../util/sessions_api_util');
var History = require('react-router').History;

var Header = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {
      currentUser: CurrentUserStore.currentUser()
    };
  },

  componentDidMount: function () {
    this.currentUserListener = CurrentUserStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.currentUserListener.remove();
  },

  _onChange: function () {
    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  logout: function (e) {
    e.preventDefault();
    SessionsApiUtil.logout(function () {
      debugger
      this.history.pushState({}, "/login");
    }.bind(this));
  },

  render: function () {

    if (CurrentUserStore.isLoggedIn()) {
      return (
        <header className="root-header">
          <img className="root-header-banner" src="/assets/banner/Dollarphotoclub_72620313.jpg" />
          <nav className="root-header-nav group">

            <h1 className="root-header-logo group">
              <a href="/">
                <div className="root-header-logo-good">good</div>
                <div className="root-header-logo-eats">eats</div>
              </a>
            </h1>

            <input type="text" name="name" placeholder="Edible / Group / Tag / Person" value="" />

            <ul className="root-header-list group">
              <li><a href="/">Explore</a></li>
              <li><a href="#/lists/">My Lists</a></li>
              <li><a href="#">Groups</a></li>
              <li><a href="#">Recommendations</a></li>
            </ul>

            <ul className="root-header-icons group">
              <li><a href="#"><i className="fa fa-envelope"></i></a></li>
              <li><a href="#"><i className="fa fa-users"></i></a></li>
              <li><a href="#/profile"><i className="fa fa-user fa-1.5x"></i></a></li>
              <li>Logged in as {this.state.currentUser.name}</li>
              <li><button className="sign-out-button" onClick={this.logout}>Sign out</button></li>
            </ul>
          </nav>
        </header>
      );
    }
    else {
      return (
        <header className="root-header">
          <img className="root-header-banner" src="/assets/banner/Dollarphotoclub_72620313.jpg" />
          <nav className="root-header-nav group">

            <h1 className="root-header-logo group">
              <a href="/">
                <div className="root-header-logo-good">good</div>
                <div className="root-header-logo-eats">eats</div>
              </a>
            </h1>

            <ul className="auth-header-list">
              <li>
                <a className="auth-alternate-link" href="#/login">Sign in</a>
              </li>
              <li>
                <a className="auth-alternate-link" href="#/users/new">Sign up</a>
              </li>

            </ul>

          </nav>
        </header>
      );
    }
  }
});

module.exports = Header;
