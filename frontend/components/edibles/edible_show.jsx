var React = require('react');
var EdibleStore = require('./../../stores/edible');
var ApiUtil = require('./../../util/api_util');
var CurrentUserStore = require('./../../stores/current_user_store');
var ListStore = require('./../../stores/list');
var SessionsApiUtil = require('./../../util/sessions_api_util');
var EdibleButton = require('./edible_button');

var EdibleShow = React.createClass({

  getInitialState: function () {
    // Check if user has the edible
    var selectedListIds = [];
    var currentUser = CurrentUserStore.currentUser();

    for (i = 0; i < currentUser.list_items; i++) {
      if (currentUser.list_items[i].edible_id == this.props.params.id) {
        selectedListIds.push(currentUser.list_items[i].list_id);
      }
    }

    return {edible: EdibleStore.find(parseInt(this.props.params.id)),
            lists: ListStore.all(),
            selectedListIds: selectedListIds};
  },

  _onChange: function () {
    this.setState({edible: EdibleStore.find(parseInt(this.props.params.id))});
  },

  _onCurrentUserChange: function () {
    var selectedListIds = [];
    var currentUser = CurrentUserStore.currentUser();

    for (i = 0; i < currentUser.list_items; i++) {
      if (currentUser.list_items[i].edible_id == this.props.params.id) {
        selectedListIds.push(currentUser.list_items[i].list_id);
      }
    }

    this.setState({selectedListIds: selectedListIds});
  },

  _onListChange: function () {
    this.setState({lists: ListStore.all()});
  },

  componentDidMount: function () {
    this.edibleListener = EdibleStore.addListener(this._onChange); // Add current user listener?
    this.currentUserListener = CurrentUserStore.addListener(this._onListenerChange);
    this.listListener = ListStore.addListener(this._onListChange);
    ApiUtil.fetchSingleEdible(this.props.params.id);
    SessionsApiUtil.fetchCurrentUser();
    ApiUtil.fetchAllLists();
  },

  onListClick: function (id) {
    var selectedListIds = this.state.selectedListIds;
    selectedListIds.push(id);
    this.setState({selectedListIds: selectedListIds}); // selectedListIds = [1, 2]
    var data = this.state.selectedListIds;
    $.ajax({
      type: "PATCH",
      url: "api/edibles/" + edible.id,
      data: {edible: data},
      sucess: function () {
        // do stuff
      }
    });
  },

  componentWillUnmount: function () {
    this.edibleListener.remove();
    this.currentUserListener.remove();
    this.listListener.remove();
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

    var lists;

    if (this.state.lists) {
      lists = this.state.lists.map(function (list) {
        return <li key={list.id}>{list.title}</li>;
      });
    }

    return (
      <div className="edible-show">
        <div className="edible-details group">

          <div className="edible-image">
            {edibleImage}
            <ul>{lists}</ul>
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
