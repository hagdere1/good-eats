var React = require('react');
var History = require('react-router').History;

var ListsIndexItem = React.createClass({
  mixins: [History],

  handleClick: function (index) {
    this.props.selectList(this.props.index);
    this.showList();
  },

  showList: function () {
    this.history.pushState(null, '/lists/' + this.props.list.id, {});
  },

  destroyList: function (event) {
    event.preventDefault();
    ApiUtil.destroyList(this.props.list.id);
    this.history.pushState(null, '/lists/');
  },

  render: function () {
    var deleteButton;
    if (this.props.list.can_delete === true) {
      deleteButton = <td onClick={this.destroyList} className="delete-list-button">&#x00D7;</td>;
    }
    else {
      deleteButton = <td></td>;
    }

    return (
      <tr className="lists-index-item">
        <td className={this.props.className} onClick={this.handleClick}>{this.props.list.title}</td>
        {deleteButton}
      </tr>
    );
  }
});

module.exports = ListsIndexItem;
