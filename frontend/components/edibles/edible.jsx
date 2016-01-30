var React = require('react');

var Edible = React.createClass({
  render: function () {
    var url = "#/edibles/" + this.props.edible.id;

    return (
      <li className="edible-list-item">
        <a href={url}>{this.props.edible.name}</a>
      </li>
    );
  }
});

module.exports = Edible;
