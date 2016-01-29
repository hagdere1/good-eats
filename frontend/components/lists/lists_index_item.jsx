var React = require('react');
var ListItemStore = require('../../stores/list_item');

var ListIndexItem = React.createClass({
  getInitialState: function () {
    var edibles = [];
    var allEdibles = ListItemStore.all();
    for (i = 0; i < allEdibles.length; i++) {
      if (this.props.key === allEdibles[i].list_id) {
        edibles.push(allEdibles[i]);
      }
    }
    return {edibles: edibles};
  },

  render: function () {
    return (
      <li className="edible-list">
        <ul>
          {this.props.list.title}
        </ul>
      </li>
    );
  }
});

module.exports = ListIndexItem;
