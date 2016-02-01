var React = require('react');
var ListStore = require('../../stores/list');
var ApiUtil = require('../../util/api_util');
var ItemsTable = require('./items_table');

var ListShow = React.createClass({

  getInitialState: function () {
    return { list: ListStore.find(parseInt(this.props.params.id)) };
  },

  _onChange: function () {
    this.setState({ list: ListStore.find(parseInt(this.props.params.id)) });
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSingleList(parseInt(newProps.params.id));
  },

  componentDidMount: function () {
    this.listListener = ListStore.addListener(this._onChange);
    ApiUtil.fetchSingleList(parseInt(this.props.params.id));
  },

  componentWillUnmount: function () {
    this.listListener.remove();
  },

  render: function () {
    if (this.state.list === undefined) {
      return <div></div>;
    }

    return (
      <div>
        <ItemsTable listId={this.props.params.id}/>
      </div>
    );


  }
});

module.exports = ListShow;
