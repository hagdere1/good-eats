var React = require('react');
var ListStore = require('./../../stores/list');
var CurrentUserStore = require('./../../stores/current_user_store');
var SessionsApiUtil = require('./../../util/sessions_api_util');
var ApiUtil = require('./../../util/api_util');
var ListsIndexItem = require('./lists_index_item');
var ListShow = require('./list_show');
var ListForm = require('./list_form');

var ListsIndex = React.createClass({
  getInitialState: function () {
    return { lists: ListStore.all()};
  },

  _onChange: function () {
    this.setState({ lists: ListStore.all() });
  },

  componentDidMount: function () {
    window.scrollTo(0, 0);
    this.listListener = ListStore.addListener(this._onChange);
    ApiUtil.fetchAllLists();
  },

  componentWillUnmount: function () {
    this.listListener.remove();
  },

  render: function () {
    return (

      <div className="lists-index group">

        <h1 className="heading-main">My Edibles</h1>

        <div className="lists-index-nav">
          <h3 className="heading-sub-main">Lists</h3>
          <table className="lists-index">
            <tbody>
              {this.state.lists.map(function (list) {
                return <ListsIndexItem key={list.id} list={list} />;
              })}
            </tbody>
          </table>
          <ListForm />
        </div>

        {this.props.children}

      </div>
    );
  }
});

module.exports = ListsIndex;
