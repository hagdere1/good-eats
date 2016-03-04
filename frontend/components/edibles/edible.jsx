var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('./../../util/api_util');
var CurrentUserStore = require('./../../stores/current_user_store');
var SessionsApiUtil = require('./../../util/sessions_api_util');

var Edible = React.createClass({

  getInitialState: function () {
    return this.getInitialValues();
  },

  getInitialValues: function () {
    this.currentUser = CurrentUserStore.currentUser();
    var currentListId;
    var currentListTitle;
    var currentListItem;
    var userItems = this.currentUser.list_items;
    var userHasListItem = false;

    for (i = 0; i < userItems.length; i++) {
      if (userItems[i].edible_id == this.props.edible.id) {
        userHasListItem = true;
        currentListId = userItems[i].list_id;
        currentListTitle = userItems[i].list_title;
        currentListItem = userItems[i];
      }
    }

    if (!userHasListItem) {
      currentListId = this.currentUser.lists[0].id;
      currentListTitle = this.currentUser.lists[0].title;
      currentListItem = null;
    }

    return {edible: this.props.edible,
            lists: this.currentUser.lists,
            currentListId: currentListId,
            currentListTitle: currentListTitle,
            currentListItem: currentListItem,
            userHasListItem: userHasListItem};
  },

  addToListOrDestroy: function (event) {
    event.preventDefault();
    var listItem = {};

    if (!this.state.userHasListItem) {
      listItem.list_id = this.state.currentListId;
      listItem.edible_id = parseInt(this.props.edible.id);
      ApiUtil.createListItem(listItem, this.setState({userHasListItem: true}));
    }
    else {
      ApiUtil.destroyListItem(this.state.currentListItem.id, this.setState({userHasListItem: false}));
    }
  },

  addListItem: function (list) {
    var listItem = {};
    listItem.list_id = list.id;
    listItem.edible_id = parseInt(this.props.edible.id);
    ApiUtil.createListItem(listItem, this.setState({userHasListItem: true}));
  },

  updateListItem: function (list) {
    var listItem = this.state.currentListItem;
    listItem.list_id = list.id;
    ApiUtil.updateListItem(listItem);
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
    SessionsApiUtil.fetchCurrentUser();
    ApiUtil.fetchAllLists();
  },

  componentWillUnmount: function () {
    this.currentUserListener.remove();
  },

  render: function () {

    var lists = [];

    if (this.state.userHasListItem) {
      for (i = 0; i < this.currentUser.lists.length; i++) {
        if (this.currentUser.lists[i].id != this.state.currentListId) {
          var list = this.currentUser.lists[i];
          lists.push(<li key={list.id} onClick={this.updateListItem.bind(this, list)}>{list.title}</li>);
        }
      }
    }

    else {
      lists = this.currentUser.lists.map(function (list) {
        return <li key={list.id} onClick={this.addListItem.bind(this, list)}>{list.title}</li>
      }.bind(this));
    }

    var buttonContent;
    if (this.state.userHasListItem) {
      buttonContent = (
        <div>
          <span className="button-checkmark">&#x2713;</span>
          <span>{this.state.currentListTitle}</span>
        </div>
      )
    }
    else {
      buttonContent = "Want To Try"
    }

    var url = "#/edibles/" + this.props.edible.id;
    return (
      <li className="edible-list-item">
        <a href={url}>
          <p>{this.props.edible.name}</p>
          <img className="edible-list-item-image" src={this.props.edible.image_url} />
        </a>
        <div className="edible-show-buttons group">
          <div className={this.state.userHasListItem ? "edible-list-item-button-selected" : "edible-list-item-button"} onClick={this.addToListOrDestroy}>{buttonContent}</div>
          <div className="edible-list-item-dropdown">
            &#9660;
            <ul className="edible-dropdown-lists">{lists}</ul>
          </div>
        </div>
      </li>
    );
  }
});

module.exports = Edible;
