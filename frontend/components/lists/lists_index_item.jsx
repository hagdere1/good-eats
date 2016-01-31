var React = require('react');
var ItemDetail = require('./item_detail');
var ApiActions = require('./../../actions/api_actions');
var History = require('react-router').History;

var ListsIndexItem = React.createClass({
  mixins: [History],

  showList: function () {
    this.history.pushState(null, '/lists/' + this.props.list.id, {});
  },

  render: function () {
    return (
      <li onClick={this.showList}>{this.props.list.title}</li>
    );
  }
});

module.exports = ListsIndexItem;
