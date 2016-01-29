var React = require('react');
var ListItemStore = require('../../stores/list_item');
var ItemDetail = require('./item_detail');

var ListsIndexItem = React.createClass({
  getInitialState: function () {
    if (this.props.params.id) {
      return { edibles: ListItemStore.findByListId(this.props.params.id) };
    }
    else {
      return { edibles: ListItemStore.all() };
    }

  },
  render: function () {
    return (
      <div>
        <h1>HOW DO I PASS THE LIST TITLE HERE?</h1>
        <ul>
          {this.state.edibles.map(function (edible) {
            return (
              <ItemDetail key={edible.id} edible={edible} />
            );
          })}
        </ul>
      </div>
    );
  }
});

module.exports = ListsIndexItem;
