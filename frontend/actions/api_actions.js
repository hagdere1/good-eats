var AppDispatcher = require('../dispatcher/dispatcher');
var EdibleConstants = require('../constants/edible_constants');
var ListConstants = require('../constants/list_constants');
var ListItemConstants = require('../constants/list_item_constants');
var ReviewConstants = require('../constants/review_constants');

var ApiActions = {

  receiveAllEdibles: function (edibles) {
    AppDispatcher.dispatch({
      actionType: EdibleConstants.EDIBLES_RECEIVED,
      edibles: edibles
    });
  },

  receiveSingleEdible: function (edible) {
    AppDispatcher.dispatch({
      actionType: EdibleConstants.EDIBLE_RECEIVED,
      edible: edible
    });
  },

  receiveAllLists: function (lists) {
    AppDispatcher.dispatch({
      actionType: ListConstants.LISTS_RECEIVED,
      lists: lists
    });
  },

  receiveSingleList: function (list) {
    AppDispatcher.dispatch({
      actionType: ListConstants.LIST_RECEIVED,
      list: list
    });
  },

  destroyList: function (id) {
    AppDispatcher.dispatch({
      actionType: ListConstants.LIST_DESTROYED,
      id: id
    });
  },

  receiveAllReviews: function (reviews) {
    AppDispatcher.dispatch({
      actionType: ReviewConstants.REVIEWS_RECEIVED,
      reviews: reviews
    });
  },

  receiveSingleReview: function (review) {
    AppDispatcher.dispatch({
      actionType: ReviewConstants.REVIEW_RECEIVED,
      review: review
    });
  },
};

module.exports = ApiActions;
