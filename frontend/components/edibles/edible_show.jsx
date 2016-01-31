var React = require('react');
var EdibleStore = require('./../../stores/edible');
var ApiUtil = require('./../../util/api_util');

var EdibleShow = React.createClass({
  getInitialState: function () {
    return {edible: EdibleStore.find(parseInt(this.props.params.id))};
  },

  addToList: function (event) {
    event.preventDefault();
    var listItem = {};
    listItem.list_id = 1; // Hard-code Want To Try list for now
    listItem.edible_id = parseInt(this.props.params.id);
    ApiUtil.createListItem(listItem);
  },

  _onChange: function () {
    this.setState({ edible: EdibleStore.find(parseInt(this.props.params.id)) });
  },

  componentDidMount: function () {
    this.edibleListener = EdibleStore.addListener(this._onChange);
    ApiUtil.fetchSingleEdible(this.props.params.id);
  },

  componentWillUnmount: function () {
    this.edibleListener.remove();
  },

  render: function () {
    return (
      <div className="edible-details group">
        <div className="edible-image">
          <img className="edible-show-image" src={this.state.edible.image_url} />
          <button className="edible-show-button" onClick={this.addToList}>Want to Try</button>
        </div>
        <div className="edible-info">
          <h1 className="edible-name">{this.state.edible.name}</h1>
          <h2 className="edible-category">{this.state.edible.category}</h2>
          <p className="edible-description">{this.state.edible.description}</p>
        </div>
      </div>
    );
  }
});

module.exports = EdibleShow;
