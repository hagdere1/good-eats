var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ReviewStore = new Store(AppDispatcher);
var ReviewConstants = require('../constants/review_constants');

var _reviews = {};

ReviewStore.all = function () {
  var reviews = [];
  for (var id in _reviews) {
    reviews.push(_reviews[id]);
  }
  return reviews;
};

ReviewStore.resetReviews = function (reviews) {
  _reviews = {};

  reviews.forEach(function (review) {
    _reviews[review.id] = review;
  });
};

ReviewStore.resetReview = function (review) {
  _reviews[review.id] = review;
};

ReviewStore.find = function (id) {
  return _reviews[id];
};

ReviewStore.findByUserId = function (id) {
  var reviews = [];
  debugger
  this.all().forEach(function (review) {
    if (review.user_id === id) {
      reviews.push(review);
    }
  });

  return reviews;
};

ReviewStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ReviewConstants.REVIEWS_RECEIVED:
      this.resetReviews(payload.reviews);
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.REVIEW_RECEIVED:
      this.resetReview(payload.review);
      ReviewStore.__emitChange();
      break;
  }
};

window.ReviewStore = ReviewStore;
module.exports = ReviewStore;
