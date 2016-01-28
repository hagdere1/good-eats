var React = require('react');
var EdibleStore = require('../stores/edible');
var Edible = require('./edible');
var ApiUtil = require('../util/api_util');

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
    return (

      <div>
        <ul>
          {this.state.edibles.map(function (edible) {
            return <Edible key={edible.id} edible={edible} />;
          })}
        </ul>
      </div>
    );
  }
});

module.exports = EdiblesIndex;
