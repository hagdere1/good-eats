var React = require('react');
var ApiActions = require('./../../actions/api_actions');

var ListsIndexItem = React.createClass({

  render: function () {
    var url = "#/lists/" + this.props.list.id;

    return (
      <li><a href={url}>{this.props.list.title}</a></li>
    );
  }
});

module.exports = ListsIndexItem;
