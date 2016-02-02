var ApiActions = require('../actions/api_actions');

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
  fetchAllListItems: function () {
    $.ajax({
      url: "api/list_items/",
      success: function (listItems) {
        ApiActions.receiveAllListItems(listItems);
      },
      error: function () {
        console.log("Failed to fetch list items.");
      }
    });
  },
  fetchSingleListItem: function (id) {
    $.ajax({
      url: "api/list_item/" + id,
      success: function (listItem) {
        ApiActions.receiveSingleListItem(listItem);
      }
    });
  },
  createListItem: function (listItem) {
    $.ajax({
      url: "api/list_items/",
      method: "POST",
      data: {list_item: listItem},
      success: function (listItemData) {
        ApiActions.receiveSingleListItem(listItemData);
        alert("List Item created! Great success!");
      },
      error: function () {
        alert("You've already added that item.");
      }
    });
  },
  destroyListItem: function (id) {
    $.ajax({
      url: "api/list_items/" + id,
      method: "DELETE",
      success: function () {
        ApiActions.destroyListItem(id);
        console.log("Deleted list item!");
      },
      error: function () {
        alert("Failed to delete item.");
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
};


window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
