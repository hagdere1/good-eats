var React = require('react');
var EdibleStore = require('./../../stores/edible');

var EdibleShow = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="edible-name">{this.props.edible.name}</h1>
        <h2 className="edible-category">{this.props.edible.category}</h2>
        <p className="edible-description">{this.props.edible.description}</p>
      </div>
    );
  }
});

module.exports = EdibleShow;
