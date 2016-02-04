var React = require('react');
var CurrentUserStore = require('./../../stores/current_user_store');
var SessionsApiUtil = require('./../../util/sessions_api_util');

var Profile = React.createClass({
  getInitialState: function () {
    var currentUser = CurrentUserStore.currentUser();
    return {currentUser: currentUser,
            reviews: currentUser.reviews,
            lists: currentUser.lists};
  },

  _onChange: function () {
    var currentUser = CurrentUserStore.currentUser();
    this.setState({currentUser: currentUser,
                   reviews: currentUser.reviews,
                   lists: currentUser.lists});
  },

  componentDidMount: function () {
    this.currentUserListener = CurrentUserStore.addListener(this._onChange);
    ApiUtil.fetchAllLists();
    SessionsApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.currentUserListener.remove();
  },

  render: function () {

    if (this.state.currentUser === "undefined") {
      return <div></div>;
    }

    var ownerName = this.state.currentUser.name + "'s";

    var lists = (
      this.state.currentUser.lists.map(function (list) {
        return (
          <li key={list.id}>
            <a href={"#/lists/" + list.id}>
              {list.title}
            </a>
          </li>
        );
      })
    );

    var currentDate = new Date();

    return (
      <div className="profile-container">
        <div className="profile-header group">

          <img className="profile-picture" src="https://31.media.tumblr.com/avatar_11da9b9a0c30_128.png" />

          <div className="profile-details">
            <h1 className="heading-main">{this.state.currentUser.name}</h1>

            <table className="profile-details-table">
              <tbody>
                <tr>
                  <td className="profile-detail">Email</td>
                  <td>{this.state.currentUser.email}</td>
                </tr>
                <tr>
                  <td className="profile-detail">Joined</td>
                  <td>{this.state.currentUser.created_at}</td>
                </tr>
                <tr>
                  <td className="profile-detail">Last Active</td>
                  <td>{currentDate.toString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="profile-lists">
          <h2>{ownerName} Lists</h2>
          <div className="profile-list-items">
            <ul>{lists}</ul>
          </div>
        </div>

        <div className="profile-reviews">
          <h2>{ownerName} Recent Reviews</h2>

          <div>
            Three reviews here
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Profile;
