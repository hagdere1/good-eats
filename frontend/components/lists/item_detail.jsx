var React = require('react');

var ItemDetail = React.createClass({
  render: function () {
    var modifyEdibleLink;
    if (this.props.edible.review.length > 0) {
      modifyEdibleLink = <a href="#">Edit</a>;
    }
    else {
      modifyEdibleLink = <a href="#">Review</a>;
    }

    return (
      <ul className="edible-item-attributes">
        <li><a href="#">{this.props.edible.title}</a></li>
        <li>{this.props.edible.rating}</li>
        <li>{this.props.edible.date_eaten}</li>
        <li>{this.props.edible.created_at}</li>
        <li>{modifyEdibleLink}</li>
      </ul>
    );
  }
});


module.exports = ItemDetail;
