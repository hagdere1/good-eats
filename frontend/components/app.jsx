var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var SessionsApiUtil = require('./../util/sessions_api_util');
var CurrentUserStore = require('./../stores/current_user_store');

var App = React.createClass({
  componentDidMount: function () {
    CurrentUserStore.addListener(this.forceUpdate.bind(this));
    SessionsApiUtil.fetchCurrentUser();
  },

  render: function () {
  
    if (!CurrentUserStore.userHasBeenFetched()) {
      return <p>PLEASE WAIT</p>;
    }

    return (
      <div className="wrapper">
        <Header />
        <div className="main">{this.props.children}</div>

      </div>
    );
  }
});

module.exports = App;
