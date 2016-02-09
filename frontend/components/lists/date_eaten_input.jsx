var React = require('react');
var ApiUtil = require('../../util/api_util');
var CurrentUserStore = require('../../stores/current_user_store');
var SessionsApiUtil = require('../../util/sessions_api_util');

var DateEatenInput = React.createClass({

  getInitialState: function () {
    return {edibleId: this.props.edibleId,
            listId: this.props.listId,
            dateEaten: this.props.listItem.date_eaten,
            listItem: this.props.listItem};
  },

  _onChange: function () {
    this.setState({edibleId: this.props.edibleId,
                  listId: this.props.listId,
                  listItem: this.props.listItem,
                  dateEaten: this.props.listItem.date_eaten});
  },

  handleChange: function (e) {
    this.setState({dateEaten: e.target.value})
  },

  submit: function (e) {
    e.preventDefault();
    listItem = this.state.listItem;
    listItem.date_eaten = this.state.dateEaten;
    ApiUtil.updateListItem(listItem);
    this.props.hideInputForm();
  },

  componentDidMount: function () {
    this.currentUserListener = CurrentUserStore.addListener(this._onChange);
    SessionsApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.currentUserListener.remove();
  },

  render: function () {
    return (
      <form onSubmit={ this.submit } className="form-date-eaten">
        <input type="text" onChange={this.handleChange} value={this.state.dateEaten} className="date-eaten-input" />
      </form>
    );
  }

});

module.exports = DateEatenInput;
