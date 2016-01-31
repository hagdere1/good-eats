var React = require('react');

var ItemDetail = React.createClass({
  getInitialState: function () {
    return { edibles: ListItemStore.findByListId(parseInt(this.props.params.id)) };
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
    var modifyEdibleLink;
    if (this.props.edible.review.length > 0) {
      modifyEdibleLink = <a href="#">Edit</a>;
    }
    else {
      modifyEdibleLink = <a href="#">Review</a>;
    }

    var items = (
      this.state.edibles.map(function (edible) {
        return (
          <ul>
            <li>{this.props.edible.title}</li>
            <li>{this.props.edible.rating}</li>
            <li>{this.props.edible.date_eaten}</li>
            <li>{this.props.edible.created_at}</li>
            <li>{modifyEdibleLink}</li>
          </ul>
        );
      })
    );

    return (
      <ul className="edible-item-attributes">
        {items}
      </ul>
    );
  }
});


module.exports = ItemDetail;
