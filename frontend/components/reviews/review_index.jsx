var React = require('react');
var ApiUtil = require('../../util/api_util');
var ReviewStore = require('../../stores/review');

var ReviewIndex = React.createClass({
  getInitialState: function () {
    return this.getReviews();
  },

  getReviews: function () {
    var allReviews = ReviewStore.all();
    var edibleReviews = [];
    allReviews.forEach(function (review) {
      if (review.edible_id === parseInt(this.props.params.id)) {
        edibleReviews.push(review);
      }
    }.bind(this));
    return { reviews: edibleReviews };
  },

  _onChange: function () {
    this.setState(this.getReviews());
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchAllReviews(this.props.params.id);
  },

  componentDidMount: function () {
    this.reviewListener = ReviewStore.addListener(this._onChange);
    ApiUtil.fetchAllReviews(this.props.params.id);
  },

  componentWillUnmount: function () {
    this.reviewListener.remove();
  },

  render: function () {
    if (this.state.reviews === undefined) {
      return <div></div>;
    }

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
