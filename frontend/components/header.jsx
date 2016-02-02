var React = require('react');
var CurrentUserStore = require('./../stores/current_user_store');
var SessionsApiUtil = require('./../util/sessions_api_util');

var Header = React.createClass({
  getInitialState: function () {
    return {
      currentUser: {}
    };
  },

  componentDidMount: function () {
    CurrentUserStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  logout: function (e) {
    e.preventDefault();
    SessionsApiUtil.logout();
  },

  render: function () {
    if (CurrentUserStore.isLoggedIn()) {
      return (
        <header className="root-header">
          <nav className="root-header-nav group">

            <h1 className="root-header-logo">
              <a href="/">good<span>eats</span></a>
            </h1>

            <input type="text" name="name" placeholder="Edible / Group / Tag / Person" value="" />

            <ul className="root-header-list group">
              <li><a href="/">Home</a></li>
              <li><a href="#/edibles">Explore</a></li>
              <li><a href="#/lists/">My Lists</a></li>
              <li><a href="#">Groups</a></li>
              <li><a href="#">Recommendations</a></li>
            </ul>

            <ul className="root-header-icons group">
              <li><a href="#"><i className="fa fa-envelope"></i></a></li>
              <li><a href="#"><i className="fa fa-users"></i></a></li>
              <li><a href="#"><i className="fa fa-user fa-1.5x"></i></a></li>
              <li>Logged in as {this.state.currentUser.name}</li>
              <li><button onClick={this.logout}>Sign out</button></li>
            </ul>
          </nav>
        </header>
      );
    }
    else {
      return (
        <header className="root-header">
          <nav className="root-header-nav group">

            <h1 className="root-header-logo">
              <a href="/">good<span>eats</span></a>
            </h1>

            <div>
              <a href="#/login">Sign in</a>
            </div>
          </nav>
        </header>
      );
    }
  }
});

module.exports = Header;
