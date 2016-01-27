var React = require('react');
var EdibleStore = require('../stores/edible');

var EdiblesIndex = React.createClass({
  getInitialState: function () {
    return { edibles: EdibleStore.all() };
  },

  _onChange: function () {
    this.setState({ edibles: EdibleStore.all() });
  },

  componentDidMount: function () {
    this.edibleListener = EdibleStore.addListener(this._onChange);
    ApiUtil.fetchAllEdibles();
  },

  componentWillUnmount: function () {
    this.edibleListener.remove();
  },

  render: function () {
    var edibles = EdibleStore.all();
    return (
      <ul>
        {this.state.edibles.map(function (edible) {
          return (
            <li key={edible.id}>
              {edible.name}
              {edible.description}
            </li>
          );
        })}
      </ul>
    );
  }
});

module.exports = EdiblesIndex;
