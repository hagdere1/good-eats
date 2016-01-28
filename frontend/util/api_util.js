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

};

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
