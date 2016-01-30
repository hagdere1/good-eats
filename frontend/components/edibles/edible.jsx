var React = require('react');

var Edible = React.createClass({
  render: function () {
    return (
      <li className="edible-list-item">
        <a href="#">{this.props.edible.name}</a>
      </li>
    );
  }
});

module.exports = Edible;
