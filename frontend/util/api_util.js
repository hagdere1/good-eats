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
        console.log("Successfully fetched your list!");
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
      },
      error: function () {
        console.log("Failed to create list item");
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
        console.log("Deleted list item!");
        cb && cb();
      },
      error: function () {
        console.log("Failed to delete list item");
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
        console.log("Successfully updated list item!");
        cb && cb();
      },
      error: function () {
        console.log("Failed to create list item.");
      }
    });
  },

  fetchAllReviews: function () {
    $.ajax({
      url: "/api/reviews/",
      success: function (reviews) {
        ApiActions.receiveAllReviews(reviews);
        console.log("Successfully retrieved reviews");
      },
      error: function () {
        console.log("Failed to retrieve reviews");
      }
    });
  },

  createReview: function (review, listId, cb) {
    $.ajax({
      url: "api/reviews",
      method: "POST",
      data: {review: review},
      success: function (reviewData) {
        console.log("You wrote a review!");
        ApiActions.receiveSingleReview(reviewData, listId);
        cb && cb();
      },
      error: function () {
        console.log("We regret to inform you that your review submission has been denied.");
      }
    });
  },

  createList: function (list, cb) {
    $.ajax({
      url: "api/lists",
      method: "POST",
      data: {list: list},
      success: function (listData) {
        console.log("You created a list!");
        ApiActions.receiveSingleList(listData);
        cb && cb();
      },
      error: function () {
        console.log("Failed to create list");
      }
    });
  },

  destroyList: function (id, cb) {
    $.ajax({
      url: "api/lists/" + id,
      method: "DELETE",
      success: function () {
        ApiActions.destroyList(id);
        console.log("Deleted list!");
        cb && cb();
      },
      error: function () {
        console.log("Failed to delete list.");
      }
    });
  },
};


window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
