var React = require('react');
var EdibleStore = require('./../../stores/edible');
var ListStore = require('./../../stores/list');
var ApiUtil = require('./../../util/api_util');

var EdibleShow = React.createClass({
  getInitialState: function () {
    return {edible: EdibleStore.find(parseInt(this.props.params.id)),
            lists: ListStore.all()};
  },

  addToList: function (event) {
    event.preventDefault();
    var listItem = {};
    listItem.list_id = 4;
    listItem.edible_id = parseInt(this.props.params.id);
    ApiUtil.createListItem(listItem);
  },

  _onChange: function () {
    this.setState({ edible: EdibleStore.find(parseInt(this.props.params.id)),
                    lists: ListStore.all()});
  },

  componentDidMount: function () {
    this.edibleListener = EdibleStore.addListener(this._onChange);
    ApiUtil.fetchSingleEdible(this.props.params.id);
    ApiUtil.fetchAllLists();

  },

  componentWillUnmount: function () {
    this.edibleListener.remove();
  },

  render: function () {
    var lists;

    if (this.state.lists) {
      lists = (
        this.state.lists.map(function(list) {
          return <li>{list.title}</li>;
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
    return (
      <div className="edible-details group">

        <div className="edible-image">
          {edibleImage}
          <div className="edible-show-buttons group">
            <button className="edible-show-button" onClick={this.addToList}>Want to Try</button>
            <button className="edible-show-button-select-list">&#9660;</button>
          </div>
          <ul>{lists}</ul>
        </div>

        <div className="edible-show-info">
          {edibleName}
          {edibleCategory}
          {edibleDescription}
        </div>

        <div className="edible-reviews">
          {this.props.children}
        </div>

      </div>
    );
  }
});

module.exports = EdibleShow;
