var React = require('react');
var History = require('react-router').History;

var ListsIndexItem = React.createClass({
  mixins: [History],

  showList: function () {
    this.history.pushState(null, '/lists/' + this.props.list.id, {});
  },

  destroyList: function (event) {
    event.preventDefault();
    ApiUtil.destroyList(this.props.list.id);
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
        <td className="list-index-item-title" onClick={this.showList}>{this.props.list.title}</td>
        {deleteButton}
      </tr>
    );
  }
});

module.exports = ListsIndexItem;
