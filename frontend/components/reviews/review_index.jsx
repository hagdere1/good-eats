var React = require('react');
var ApiUtil = require('../../util/api_util');


var ReviewIndex = React.createClass({

  getInitialState: function () {
    return this.getReviews();
  },

  getReviews: function () {
    var allReviews = ReviewStore.all();
    var edibleReviews = [];
    allReviews.forEach(function (review) {
      if (review.edible_id === parseInt(this.props.edibleId)) {
        edibleReviews.push(review);
      }
    }.bind(this));
    return { reviews: edibleReviews };
  },

  _onChange: function () {
    this.setState(this.getReviews());
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchAllReviews();
  },

  componentDidMount: function () {
    this.reviewListener = ReviewStore.addListener(this._onChange);
    ApiUtil.fetchAllReviews();
  },

  componentWillUnmount: function () {
    this.reviewListener.remove();
  },

  render: function () {
    var reviews = (
      this.state.reviews.map(function (review) {
        <article>
          <p>{review.title}</p>
          <p>{review.user}</p>
          <p>{review.created_at}</p>
          <p>{review.body}</p>
        </article>;
      })
    );

    return <div>{reviews}</div>;
  }
});

module.exports = ReviewIndex;
