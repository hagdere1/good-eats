var React = require('react');
var ListStore = require('./../../stores/list');
var ApiUtil = require('./../../util/api_util');
var ListsIndexItem = require('./lists_index_item');
var ListShow = require('./list_show');

var ListsIndex = React.createClass({
  getInitialState: function () {
    return { lists: ListStore.all() };
  },

  _onChange: function () {
    this.setState({ lists: ListStore.all() });
  },

  componentDidMount: function () {
    this.listListener = ListStore.addListener(this._onChange);
    ApiUtil.fetchAllLists();
  },

  componentWillUnmount: function () {
    this.listListener.remove();
  },

  render: function () {
    return (
      <div className="lists-index group">
        <div className="lists-index-nav">
          <h1 className="heading-main">My Edibles</h1>
          <h2 className="heading-sub-main">Lists</h2>
          <div className="lists-content">
            <ul className="lists-index">
              {this.state.lists.map(function (list) {
                return <ListsIndexItem key={list.id} list={list} />;
              })}
            </ul>
            <h3 className="heading-add-list"></h3>
            <form className="add-list-form"></form>
          </div>
        </div>

        {this.props.children}

      </div>
    );
  }
});

module.exports = ListsIndex;
