var React = require('react');
var ListItemStore = require('./../../stores/list_item');
var ItemDetail = require('./item_detail');
var ApiActions = require('./../../actions/api_actions');

var ListsIndexItem = React.createClass({
  getInitialState: function () {
    if (this.props.params.id) {
      return { edibles: ListItemStore.findByListId(this.props.params.id) };
    }
    else {
      return { edibles: ListItemStore.all() };
    }
  },

  _onChange: function () {
    this.setState({ edibles: ListItemStore.all() });
  },

  componentDidMount: function () {
    this.listItemListener = ListItemStore.addListener(this._onChange);
    ApiActions.fetchAllListItems();
  },

  componentWillUnmount: function () {
    this.listItemListener.remove();
  },

  render: function () {
    return (
      <div>
        <h1>PASS THE LIST TITLE HERE</h1>
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
