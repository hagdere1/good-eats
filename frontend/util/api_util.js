var ApiActions = require('../actions/api_actions');
var SessionsApiUtil = require('./sessions_api_util');

ApiUtil = {

  fetchAllEdibles: function () {
    $.ajax({
      url: "api/edibles",
      success: function (edibles) {
        ApiActions.receiveAllEdibles(edibles);
      }
    });
  },

  fetchSingleEdible: function (id) {
    $.ajax({
      url: "api/edibles/" + id,
      success: function (edible) {
        ApiActions.receiveSingleEdible(edible);
      }
    });
  },

  fetchAllLists: function () {
    $.ajax({
      url: "api/lists",
      success: function (lists) {
        ApiActions.receiveAllLists(lists);
      }
    });
  },

  fetchSingleList: function (id) {
    $.ajax({
      url: "api/lists/" + id,
      success: function (list) {
        ApiActions.receiveSingleList(list);
      }
    });
  },

  createListItem: function (listItem, cb) {
    $.ajax({
      url: "api/list_items/",
      method: "POST",
      data: {list_item: listItem},
      success: function () {
        SessionsApiUtil.fetchCurrentUser();
        cb && cb();
      }
    });
  },

  destroyListItem: function (id, cb) {
    $.ajax({
      url: "api/list_items/" + id,
      method: "DELETE",
      success: function (listItem) {
        SessionsApiUtil.fetchCurrentUser();
        ApiActions.destroyListItem(listItem);
        cb && cb();
      }
    });
  },

  updateListItem: function (listItem, cb) {
    $.ajax({
      url: "api/list_items/" + listItem.id,
      method: "PATCH",
      data: {list_item: listItem},
      success: function (listItem) {
        SessionsApiUtil.fetchCurrentUser();
        cb && cb();
      },
    });
  },

  fetchAllReviews: function () {
    $.ajax({
      url: "/api/reviews/",
      success: function (reviews) {
        ApiActions.receiveAllReviews(reviews);
        console.log("successfully retrieved reviews");
        console.log(reviews.length);
      }
    });
  },

  createReview: function (review, listId, cb) {
    $.ajax({
      url: "api/reviews",
      method: "POST",
      data: {review: review},
      success: function (reviewData) {
        ApiActions.receiveSingleReview(reviewData, listId);
        cb && cb();
      }
    });
  },

  createList: function (list, cb) {
    $.ajax({
      url: "api/lists",
      method: "POST",
      data: {list: list},
      success: function (listData) {
        ApiActions.receiveSingleList(listData);
        cb && cb();
      }
    });
  },

  destroyList: function (id, cb) {
    $.ajax({
      url: "api/lists/" + id,
      method: "DELETE",
      success: function () {
        ApiActions.destroyList(id);
        cb && cb();
      }
    });
  },
};


window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
