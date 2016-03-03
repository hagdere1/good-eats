var React = require('react');
var UsersStore = require('../../stores/users_store');
var UsersApiUtil = require('../../util/users_api_util');
var ApiUtil = require('../../util/api_util');

var UserShow = React.createClass({
  getInitialState: function() {
    return {
      user: null,
      reviews: [],
      lists: []
    };
  },

  getStateFromStore: function () {
    var user = UsersStore.findUserById(parseInt(this.props.params.id))
    var reviews = ReviewStore.findByUserId(user.id);
    debugger
    return {
      user: user,
      reviews: reviews,
      lists: user.lists
    };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  _onReviewChange: function () {
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function() {
    window.scrollTo(0, 0);
    this.userListener = UsersStore.addListener(this._onChange);
    this.reviewListener = ReviewStore.addListener(this._onReviewChange);
    UsersApiUtil.fetchUser(this.props.params.id);
    ApiUtil.fetchAllReviews();
    debugger
  },

  componentWillUnmount: function() {
    this.userListener.remove();
    this.reviewListener.remove();
  },

  render: function() {

    var user = this.state.user;
    if (!user) {
      return (
        <div></div>
      );
    }

    var ediblesEaten;
    var numReviews;
    var ownerName;
    var lists;
    var reviews;
    var profilePicture;
    var currentDate;

    if (this.state.user && this.state.reviews) {
      numEdiblesEaten = this.state.user.lists[1].list_items.length;
      numReviews = this.state.reviews.length;
      ownerName = this.state.user.name + "'s";

      lists = (
        this.state.user.lists.map(function (list) {
          return (
            <li key={list.id} className="profile-list">
              {list.title} ({list.list_items.length})
            </li>
          );
        })
      );

      reviews = (
        this.state.reviews.reverse().map(function (review) {
          return (
            <div key={review.id} className="review">
              <div className="review-name-date group">
                <p className="review-name"><span className="profile-review-name">{review.user} reviewed</span> <a className="profile-edible-link" href={"#/edibles/" + review.edible_id}>{review.edible_name}</a>:</p>
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

      profilePicture = <img className="profile-picture" src={this.state.user.image_url}/>;

      currentDate = new Date();
    }

    return (
      <div className="profile-container">
        <div className="profile-header group">

          <div className="profile-picture-container">
            {profilePicture}
          </div>

          <div className="profile-details">
            <h1 className="heading-main">{this.state.user.name}</h1>

            <table className="profile-details-table">
              <tbody>
                <tr>
                  <td className="profile-detail">Email</td>
                  <td>{this.state.user.email}</td>
                </tr>
                <tr>
                  <td className="profile-detail">Joined</td>
                  <td>{this.state.user.created_at}</td>
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
          <h2>{ownerName} Reviews</h2>

          <div>
            {reviews}
          </div>
        </div>

      </div>
    );
  }
});

module.exports = UserShow;
