var React = require('react');
var EdibleStore = require('./../../stores/edible');
var ApiUtil = require('./../../util/api_util');
var CurrentUserStore = require('./../../stores/current_user_store');
var ListItemStore = require('./../../stores/list_item');
var SessionsApiUtil = require('./../../util/sessions_api_util');

var EdibleShow = React.createClass({

  getInitialState: function () {
    return this.getInitialValues();
  },

  getInitialValues: function (edible, currentUser) {
    this.edible = EdibleStore.find(parseInt(this.props.params.id));
    this.currentUser = CurrentUserStore.currentUser();
    var currentList = (this.currentList || null);
    var currentListItem = (this.currentListItem || null);
    var userItems = this.currentUser.list_items;
    var userHasListItem = false;
    var inList = false;

    for (i = 0; i < userItems.length; i++) {
      if (userItems[i].edible_id == this.props.params.id) {
        userHasListItem = true;
        currentList = userItems[i].list;
        currentListItem = userItems[i];
      }
    }

    if (!userHasListItem) {
      currentList = this.currentUser.lists[0];
      currentListItem = null;
    }

    return {edible: this.edible,
            lists: this.currentUser.lists,
            currentList: currentList,
            currentListItem: currentListItem,
            userHasListItem: userHasListItem};
  },

  addToList: function (event) {
    event.preventDefault();
    var listItem = {};

    if (!this.state.userHasListItem) {
      listItem.list_id = this.state.currentList.id;
      listItem.edible_id = parseInt(this.props.params.id);
      var that = this;
      ApiUtil.createListItem(listItem, that.setState({userHasListItem: true}));
    }
  },

  deleteFromList: function (event) {
    var that = this;
    ApiUtil.destroyListItem(this.state.currentListItem.id, that.setState({userHasListItem: false}));
  },

  handleChooseList: function (newList, e) {
    var listItem = {};

    listItem.list_id = newList.id;
    listItem.edible_id = parseInt(this.props.params.id);
    var that = this;

    if (this.state.userHasListItem) {
      ApiUtil.destroyListItem(this.state.currentListItem.id, that.setState({userHasListItem: false}));
      ApiUtil.createListItem(listItem, that.setState({userHasListItem: true}));
    }
    else {
      ApiUtil.createListItem(listItem, that.setState({userHasListItem: true}));
    }
  },

  _onChange: function () {
    var state = this.getInitialValues();
    this.setState(state);
  },

  _onListItemChange: function () {
    var state = this.getInitialValues();
    this.setState(state);
  },

  _onCurrentUserChange: function () {
    var state = this.getInitialValues();
    this.setState(state);
  },

  componentDidMount: function () {
    this.edibleListener = EdibleStore.addListener(this._onChange);
    this.currentUserListener = CurrentUserStore.addListener(this._onCurrentUserChange);
    this.listItemListener = ListItemStore.addListener(this._onListItemChange);
    ApiUtil.fetchSingleEdible(this.props.params.id);
    ApiUtil.fetchAllLists();
    SessionsApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.edibleListener.remove();
    this.currentUserListener.remove();
    this.listItemListener.remove();
  },

  render: function () {
    var lists;

    if (this.state.lists) {
      lists = (
        this.state.lists.map(function(list) {
          return <li onClick={this.handleChooseList.bind(this, list)} list={list} key={list.id}>{list.title}</li>;
        }.bind(this))
      );
    }

    var edibleImage,
        edibleName,
        edibleCategory,
        edibleDescription;

    if (this.state.edible) {
      edibleImage = <img className="edible-show-image" src={this.state.edible.image_url} />;
      edibleName = <h1 className="edible-show-name">{this.state.edible.name}</h1>;
      edibleCategory = <h2 className="edible-show-category">{this.state.edible.category}</h2>;
      edibleDescription = <p className="edible-show-description">{this.state.edible.description}</p>;
    }

    var edibleShowButton;
    if (this.state.userHasListItem) {
      edibleShowButtonClass = "edible-show-button-checked";
      buttonName = this.state.currentList.title;
      edibleShowButton = <div className={edibleShowButtonClass}>{buttonName} <mark onClick={this.deleteFromList}>&#10005;</mark></div>;
    }
    else {
      edibleShowButtonClass = "edible-show-button-unselected";
      edibleShowButton = <button className={edibleShowButtonClass} onClick={this.addToList}>Want to Try</button>;
    }

    return (
      <div className="edible-show">
        <div className="edible-details group">

          <div className="edible-image">
            {edibleImage}
            <div className="edible-show-buttons group">
              {edibleShowButton}
              <div className="edible-show-button-select-list">
                &#9660;
                <ul className="edible-select-list">{lists}</ul>
              </div>
            </div>

          </div>

          <div className="edible-show-info">
            {edibleName}
            {edibleCategory}
            {edibleDescription}
          </div>
        </div>

        <div className="edible-reviews">
          <p className="reviews-heading">Community Reviews</p>
          {this.props.children}
        </div>

      </div>
    );
  }
});

module.exports = EdibleShow;
