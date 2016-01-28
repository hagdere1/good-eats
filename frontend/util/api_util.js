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
  }
};

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
