var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('./../../util/api_util');

var Edible = React.createClass({
  addToList: function (event) {
    event.preventDefault();
    var listItem = {};
    listItem.list_id = 4;
    listItem.edible_id = parseInt(this.props.edible.id);
    ApiUtil.createListItem(listItem);
  },

  render: function () {
    var url = "#/edibles/" + this.props.edible.id;
    return (
      <li className="edible-list-item">
        <a href={url}>
          <p>{this.props.edible.name}</p>
          <img className="edible-list-item-image" src={this.props.edible.image_url} />
        </a>
        <button className="edible-list-item-button" onClick={this.addToList}>Want to Try</button>
      </li>
    );
  }
});

module.exports = Edible;
