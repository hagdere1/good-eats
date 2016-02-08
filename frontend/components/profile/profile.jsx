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

    var ediblesEaten;
    var numReviews;
    if (this.state.currentUser) {
      numEdiblesEaten = this.state.currentUser.lists[1].list_items.length;
      numReviews = this.state.currentUser.reviews.length;
    }

    var ownerName = this.state.currentUser.name + "'s";

    var lists = (
      this.state.currentUser.lists.map(function (list) {
        return (
          <li key={list.id} className="profile-list">
            <a href={"#/lists/" + list.id}>
              {list.title}
            </a>
          </li>
        );
      })
    );

    var reviews = (
      this.state.currentUser.reviews.reverse().map(function (review) {
        return (
          <div key={review.id} className="review">
            <div className="review-name-date group">
              <p className="review-name"><span className="profile-review-name">{review.user} reviewed</span> <a className="profile-edible-link" href={"#/edibles/" + review.edible.id}>{review.edible.name}</a>:</p>
              <p className="review-date">{review.created_at}</p>
            </div>

            <div>
              <p className="review-title">{review.title}</p>
            </div>

            <div>
              <p className="review-body">{review.body}</p>
            </div>
          </div>
        );
      })
    );
 
    var profilePicture = <img className="profile-picture" src={this.state.currentUser.image_url}/>;

    var currentDate = new Date();

    return (
      <div className="profile-container">
        <div className="profile-header group">

          <div className="profile-picture-container">
            {profilePicture}
          </div>

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

        <div className="profile-stats">
          <p>{numReviews} reviews</p>
          <p>{numEdiblesEaten} edibles eaten</p>
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
            {reviews}
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Profile;
