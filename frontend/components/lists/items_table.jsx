var React = require('react');
var ApiUtil = require('../../util/api_util');
var ListItemStore = require('../../stores/list_item');

var ItemsTable = React.createClass({
  getInitialState: function () {
    return this.getListItems();
  },

  getListItems: function () {
    var allItems = ListItemStore.all();
    var listItems = [];
    allItems.forEach(function (listItem) {
      if (listItem.list_id === parseInt(this.props.listId)) {
        listItems.push(listItem);
      }
    }.bind(this));
    return { edibles: listItems };
  },

  _onChange: function () {
    this.setState(this.getListItems());
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchAllListItems();
  },

  componentDidMount: function () {
    this.listItemListener = ListItemStore.addListener(this._onChange);
    ApiUtil.fetchAllListItems();
  },

  componentWillUnmount: function () {
    this.listItemListener.remove();
  },

  render: function () {

    return (
      <table className="item-detail-table">
        <tbody className="item-detail-table-body">
          <tr className="item-detail-table-headers">
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Date Eaten</th>
            <th>Date Added</th>
          </tr>

          {this.state.edibles.map(function (edible) {
            return (
              <tr className="item-detail-table-row" key={edible.name}>
                <td><img src={edible.image_url} className="item-detail-image"/></td>
                <td>{edible.name}</td>
                <td>{edible.category}</td>
                <td>{edible.rating}</td>
                <td>{edible.date_eaten}</td>
                <td>{edible.created_at}</td>
                <td>Edit Review</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
});


module.exports = ItemsTable;
