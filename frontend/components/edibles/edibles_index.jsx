var React = require('react');
var EdibleStore = require('./../../stores/edible');
var ApiUtil = require('./../../util/api_util');
var Edible = require('./edible');
var SessionsApiUtil = require('./../../util/sessions_api_util');
var CurrentUserStore = require('./../../stores/current_user_store');

var EdiblesIndex = React.createClass({
  getInitialState: function () {
    return { edibles: [],
             currentUser: null };
  },

  _onChange: function () {
    this.setState({ edibles: EdibleStore.all() });
  },

  _onCurrentUserChange: function () {
    this.setState({ currentUser: CurrentUserStore.currentUser() });
  },

  componentDidMount: function () {
    this.edibleListener = EdibleStore.addListener(this._onChange);
    this.currentUserListener = CurrentUserStore.addListener(this._onCurrentUserChange)
    SessionsApiUtil.fetchCurrentUser();
    ApiUtil.fetchAllEdibles();
  },

  componentWillUnmount: function () {
    this.edibleListener.remove();
    this.currentUserListener.remove();
  },

  render: function () {
    var indexItems = (
      this.state.edibles.map(function (edible) {
        return <Edible key={edible.id} edible={edible} currentUser={this.state.currentUser}/>;
      }.bind(this))
    );

    return (
      <div className="edibles-index">
        <h1 className="heading-main">Explore Edibles</h1>
        <ul className="edibles-index-items group">
          {indexItems}
        </ul>
      </div>
    );
  }
});

module.exports = EdiblesIndex;
