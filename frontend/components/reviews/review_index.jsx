var React = require('react');
var ApiUtil = require('../../util/api_util');
var ReviewStore = require('../../stores/review');

var ReviewIndex = React.createClass({
  getInitialState: function () {
    return this.getEdibleReviews();
  },

  getEdibleReviews: function () {
    var allReviews = ReviewStore.all();

    var edibleReviews = [];
    allReviews.forEach(function (review) {
      if (review.edible_id == parseInt(this.props.params.id)) {
        edibleReviews.push(review);
      }
    }.bind(this));

    return { reviews: edibleReviews };
  },

  _onChange: function () {
    this.setState(this.getEdibleReviews());
  },

  componentDidMount: function () {
    this.reviewListener = ReviewStore.addListener(this._onChange);
    ApiUtil.fetchAllReviews();
  },

  componentWillUnmount: function () {
    this.reviewListener.remove();
  },

  updateReview: function (e) {

  },

  render: function () {

    if (this.state.reviews === undefined) {
      return <div></div>;
    }

    var reviews = (
      this.state.reviews.map(function (review) {
        return (
          <article key={review.id}>
            <p>{review.title}</p>
            <p>{review.user}</p>
            <p>{review.created_at}</p>
            <p>{review.body}</p>
            <button onClick={this.updateReview}>Update</button>
          </article>
        );
      })
    );

    return <div>{reviews}</div>;
  }
});

module.exports = ReviewIndex;
