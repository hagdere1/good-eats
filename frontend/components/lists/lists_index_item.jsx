var React = require('react');
var History = require('react-router').History;

var ListsIndexItem = React.createClass({
  mixins: [History],

  showList: function () {
    this.history.pushState(null, '/lists/' + this.props.list.id, {});
  },

  render: function () {
    return (
      <li onClick={this.showList} className="lists-index-item">
        {this.props.list.title}
      </li>
    );
  }
});

module.exports = ListsIndexItem;
