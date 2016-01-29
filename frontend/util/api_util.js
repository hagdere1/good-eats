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
        ApiActions.receiveSingleList(list);
      }
    });
  },
  fetchAllListItems: function (id) {
    $.ajax({
      url: "api/list_items/",
      success: function (listItems) {
        ApiActions.receiveAllListItems(listItems);
      }
    });
  },
  fetchSingleListItem: function (id) {
    $.ajax({
      url: "api/list_items/" + id,
      success: function (listItem) {
        ApiActions.receiveSingleListItem(listItem);
      }
    });
  }
};

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
