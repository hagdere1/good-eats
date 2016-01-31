var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('./../../util/api_util');

var Edible = React.createClass({
  addToList: function (event) {
    event.preventDefault();
    var listItem = {};
    listItem.list_id = 1; // Hard-code Want To Try list for now
    listItem.edible_id = parseInt(this.props.edible.id);
    ApiUtil.createListItem(listItem);
  },

  render: function () {
    var url = "#/edibles/" + this.props.edible.id;
    return (
      <li className="edible-list-item">
        <a href={url}>
          <img className="edible-list-item-image" src={this.props.edible.image_url} />
          {this.props.edible.name}
        </a>
        <button className="edible-list-item-button" onClick={this.addToList}>Want to Try</button>
      </li>
    );
  }
});

module.exports = Edible;
