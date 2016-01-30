var React = require('react');
var EdibleStore = require('./../../stores/edible');

var EdibleShow = React.createClass({
  getInitialState: function () {
    return {edible: EdibleStore.find(this.props.params.id)};
  },

  _onChange: function () {
    this.setState({ edible: EdibleStore.find(this.props.params.id) });
  },

  componentDidMount: function () {
    this.edibleListener = EdibleStore.addListener(this._onChange);
    ApiUtil.fetchSingleEdible();
  },

  componentWillUnmount: function () {
    this.edibleListener.remove();
  },

  render: function () {
    return (
      <div>
        <h1 className="edible-name">{this.state.edible.name}</h1>
        <h2 className="edible-category">{this.state.edible.category}</h2>
        <p className="edible-description">{this.state.edible.description}</p>
      </div>
    );
  }
});

module.exports = EdibleShow;
