var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchAllEdibles: function () {
    $.ajax({
      url: "api/edibles",
      method: 'GET',
      success: function (edibles) {
        ApiActions.receiveAllEdibles(edibles);
      }
    });
  }
};

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
