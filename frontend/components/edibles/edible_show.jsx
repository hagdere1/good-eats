var React = require('react');
var EdibleStore = require('./../../stores/edible');
var ApiUtil = require('./../../util/api_util');
var CurrentUserStore = require('./../../stores/current_user_store');
var SessionsApiUtil = require('./../../util/sessions_api_util');


var EdibleShow = React.createClass({

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

    return {edible: EdibleStore.find(parseInt(this.props.params.id)),
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
      listItem.edible_id = parseInt(this.props.params.id);
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
    this.edibleListener = EdibleStore.addListener(this._onChange);
    this.currentUserListener = CurrentUserStore.addListener(this._onCurrentUserChange);
    SessionsApiUtil.fetchCurrentUser();
    ApiUtil.fetchSingleEdible(this.props.params.id);
  },

  componentWillUnmount: function () {
    this.edibleListener.remove();
    this.currentUserListener.remove();
  },

  render: function () {

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

    return (
      <div className="edible-show">
        <div className="edible-details group">

          <div className="edible-image">
            {edibleImage}
            <button className="edible-list-item-button" onClick={this.addToListOrDestroy}>{this.state.userHasListItem ? "Remove" : "Want To Try"}</button>
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
