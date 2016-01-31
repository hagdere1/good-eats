var React = require('react');
var EdibleStore = require('./../../stores/edible');
var ApiUtil = require('./../../util/api_util');
var Edible = require('./edible');

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
    var indexItems = (
      this.state.edibles.map(function (edible) {
        return <Edible key={edible.id} edible={edible} />;
      })
    );

    return (
      <div>
        <h1 className="heading-main">Explore Edibles</h1>
        <ul className="edibles-index-items">
          {indexItems}
        </ul>
      </div>
    );
  }
});

module.exports = EdiblesIndex;
