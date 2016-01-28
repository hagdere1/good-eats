var React = require('react');
var ListStore = require('../../stores/list');
var ApiActions = require('../../util/api_util');

var ListsIndex = React.createClass({
  getInitialState: function () {
    return { lists: ListStore.all() };
  },

  _onChange: function () {
    this.setState({ lists: ListStore.all() });
  },

  componentDidMount: function () {
    this.listListener = ListStore.addListener(this._onChange);
    ApiActions.fetchAllLists();
  },

  componentWillUnmount: function () {
    this.listListener.remove();
  },

  render: function () {
    return (
      <div className="lists">
        <h1 className="heading-main">My Edibles</h1>
        <ul className="lists-list">
          {this.state.lists.map(function (list) {
            return <li key={list.id}>{list.title}</li>;
          })}
        </ul>
      </div>
    );
  }
});

module.exports = ListsIndex;
