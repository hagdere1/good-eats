var React = require('react');
var ApiUtil = require('../../util/api_util');
var ListItemStore = require('../../stores/list_item');

var ItemDetail = React.createClass({
  getStateFromStore: function () {
    return { edibles: ListItemStore.all() };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
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

    if (this.state.edibles === undefined) {
      return <div></div>;
    }

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
              <tr className="item-detail-table-row">
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


module.exports = ItemDetail;
