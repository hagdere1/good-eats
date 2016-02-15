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

  render: function () {

  var reviews;
    if (this.state.reviews) {
      reviews = (
        this.state.reviews.map(function (review) {
          return (
            <article key={review.id} className="review group">

              <div>
                <img className="review-image" src={review.user_image_url} />
              </div>

              <div className="review-content">
                <div className="review-name-date group">
                  <p className="review-name"><a href={"#/users/" + review.user_id}>{review.user}</a>:</p>
                  <p className="review-date">{review.created_at}</p>
                </div>

                <div>
                  <p className="review-title">{review.title}</p>
                </div>

                <div>
                  <p className="review-body">{review.body}</p>
                </div>
              </div>
            </article>
          );
        })
      );
    }

    return <div>{reviews}</div>;
  }
});

module.exports = ReviewIndex;
