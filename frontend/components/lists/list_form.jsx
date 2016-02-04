var React = require('react');
var ApiUtil = require('./../../util/api_util');

var ListForm = React.createClass({
  getInitialState: function () {
    return {title: ""};
  },

  submit: function (e) {
    e.preventDefault();
    list = {};
    list.title = this.state.title;
    list.can_delete = true;
    that = this;
    ApiUtil.createList(list, that.setState({title: ""}));
  },

  handleTitleChange: function (e) {
    this.setState({title: e.target.value});
  },

  render: function () {
    return (
      <form onSubmit={ this.submit } className="form-add-list">
        <input type="text" name="title" onChange={this.handleTitleChange} value={this.state.title} className="add-list-input-text"/>
        <button>Add List</button>
      </form>
    );
  }
});

module.exports = ListForm;
