var React = require('react');
var EdibleStore = require('../stores/edible');

var Edible = React.createClass({
  showDetail: function () {
    // onClick callback
  },

  render: function () {
    return (
      <li className="edible-list-item" onClick={this.showDetail}>
        {this.props.edible.name}
      </li>
    );
  }
});

module.exports = Edible;
