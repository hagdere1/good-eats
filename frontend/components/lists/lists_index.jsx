var React = require('react');
var ListStore = require('./../../stores/list');
var ApiActions = require('./../../util/api_util');
var ListsIndexItem = require('./lists_index_item');

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
    // list index item of props id
    return (
      <div>
        <h1 className="heading-main">My Edibles</h1>
        <h2 className="heading-sub-main">Lists</h2>
        <div className="lists-content group">

          <ul className="lists-index">
            {this.state.lists.map(function (list) {
              return <ListsIndexItem key={list.id} list={list} />;
            })}
          </ul>

        </div>
      </div>
    );
  }
});

module.exports = ListsIndex;
