var React = require('react');
var EdibleStore = require('../stores/edible');

var Edible = React.createClass({
  render: function () {
    return (
      <li className="edible-list-item">
        {this.props.edible.name}
      </li>
    );
  }
});

module.exports = Edible;
