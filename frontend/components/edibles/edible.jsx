var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('./../../util/api_util');
var CurrentUserStore = require('./../../stores/current_user_store');
var SessionsApiUtil = require('./../../util/sessions_api_util');

var Edible = React.createClass({
  addToList: function (event) {
    event.preventDefault();
    var listItem = {};
    listItem.list_id = 4;
    listItem.edible_id = parseInt(this.props.edible.id);
    ApiUtil.createListItem(listItem);
  },

  getInitialState: function () {
    return this.getInitialValues();
  },

  getInitialValues: function () {
    this.currentUser = CurrentUserStore.currentUser();
    var currentList;
    var currentListItem;
    var userItems = this.currentUser.list_items;
    var userHasListItem = false;
    var inList = false;

    for (i = 0; i < userItems.length; i++) {
      if (userItems[i].edible_id == this.props.edible.id) {
        userHasListItem = true;
        currentList = userItems[i].list;
        currentListItem = userItems[i];
      }
    }

    if (!userHasListItem) {
      currentList = this.currentUser.lists[0];
      currentListItem = null;
    }

    return {edible: this.props.edible,
            lists: this.currentUser.lists,
            currentList: currentList,
            currentListItem: currentListItem,
            userHasListItem: userHasListItem};
  },

  addToListOrDestroy: function (event) {
    event.preventDefault();
    var listItem = {};

    if (!this.state.userHasListItem) {
      listItem.list_id = this.state.currentList.id;
      listItem.edible_id = parseInt(this.props.edible.id);
      ApiUtil.createListItem(listItem, this.setState({userHasListItem: true}));
    }
    else {
      ApiUtil.destroyListItem(this.state.currentListItem.id, this.setState({userHasListItem: false}));
    }
  },

  _onChange: function () {
    var state = this.getInitialValues();
    this.setState(state);
  },

  _onCurrentUserChange: function () {
    var state = this.getInitialValues();
    this.setState(state);
  },

  componentDidMount: function () {
    this.currentUserListener = CurrentUserStore.addListener(this._onCurrentUserChange);
    ApiUtil.fetchAllLists();
    SessionsApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.currentUserListener.remove();
  },




  render: function () {

    var url = "#/edibles/" + this.props.edible.id;
    return (
      <td className="edibles-table-item">
        <a href={url}>
          <p>{this.props.edible.name}</p>
          <img className="edible-list-item-image" src={this.props.edible.image_url} />
        </a>
        <button className="edible-list-item-button" onClick={this.addToListOrDestroy}>{this.state.userHasListItem ? "Remove" : "Add"}</button>
      </td>
    );
  }
});

module.exports = Edible;
