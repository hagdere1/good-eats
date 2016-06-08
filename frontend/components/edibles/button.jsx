var React = require('react');
var CurrentUserStore = require('./../../stores/current_user_store');
var SessionsApiUtil = require('./../../util/sessions_api_util');
var ListStore = require('./../../stores/list');
var ApiUtil = require('./../../util/api_util');

var Button = React.createClass({
  getInitialState: function () {
    return { currentListItem: this.getCurrentListItem(),
             currentUser: this.props.currentUser };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({ currentUser: nextProps.currentUser });
    this.forceUpdate();
  },

  componentDidMount: function () {
    this.listListener = ListStore.addListener(this._onChange);
    this.currentUserListener = CurrentUserStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listListener.remove();
    this.currentUserListener.remove();
  },

  _onChange: function () {
    this.setState({ currentListItem: this.getCurrentListItem(),
                    currentUser: this.props.currentUser });
  },

  getCurrentListItem: function () {
    var listItems = this.props.currentUser.list_items;
    var currentListItem = null;

    listItems.forEach(function (listItem) {
      if (listItem.edible_id === this.props.edibleId) {
        currentListItem = listItem;
      }
    }.bind(this));

    return currentListItem;
  },

  handleButtonClick: function () {
    if (this.state.currentListItem) {
      this.removeEdible();
    }
    else {
      this.addEdible();
    }
  },

  removeEdible: function () {
    ApiUtil.fetchSingleList(this.state.currentListItem.list_id);
    ApiUtil.destroyListItem(this.state.currentListItem);
  },

  addEdible: function (list) {
    listItem = {};
    listItem.edible_id = this.props.edibleId;
    if (list) {
      listItem.list_id = list.id;
    }
    else {
      listItem.list_id = this.state.currentUser.lists[0].id;
    }
    ApiUtil.createListItem(listItem);
  },

  changeList: function (newList) {
    var listItem = this.state.currentListItem;
    listItem.list_id = newList.id;
    ApiUtil.updateListItem(listItem);
  },

  render: function () {
    var buttonClass;
    var buttonContent;
    if (this.state.currentListItem) {
      buttonClass = "edible-list-item-button-selected";
      buttonContent = (
        <div>
          <span className="button-checkmark">&#x2713;</span>
          <span>{this.state.currentListItem.list_title}</span>
        </div>
      )
    }
    else {
      buttonClass = "edible-list-item-button";
      buttonContent = "Want to Try";
    }

    var lists = [];
    if (this.state.currentListItem) {
      for (var i = 0; i < this.state.currentUser.lists.length; i++) {
        if (this.state.currentListItem.list_id != this.state.currentUser.lists[i].id) {
          var list = this.state.currentUser.lists[i];
          lists.push(<li key={list.id} onClick={this.changeList.bind(this, list)}>{list.title}</li>);
        }
      }
    }
    else {
      lists = this.state.currentUser.lists.map(function (list) {
        return <li key={list.id} onClick={this.addEdible.bind(this, list)}>{list.title}</li>
      }.bind(this));
    }

    return (
      <div className="edible-show-buttons group">
        <div className={buttonClass} onClick={this.handleButtonClick}>{buttonContent}</div>
        <div className="edible-list-item-dropdown">
          &#9660;
          <ul className="edible-dropdown-lists">{lists}</ul>
        </div>
      </div>
    );
  }
});

module.exports = Button;
