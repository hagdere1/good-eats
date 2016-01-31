var React = require('react');
var ReactDom = require('react-dom');

var Edible = React.createClass({
  addToListClick: function (event) {

    alert("Added to Your List!");
  },

  render: function () {
    var url = "#/edibles/" + this.props.edible.id;

    return (
      <li className="edible-list-item">
        <a href={url}>{this.props.edible.name}</a>
        <button onClick={this.addToListClick}>Want to Try</button>
      </li>
    );
  }
});

module.exports = Edible;
