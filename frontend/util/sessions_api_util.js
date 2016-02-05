var CurrentUserActions = require("./../actions/current_user_actions");
var SessionsApiUtil = {
  login: function (credentials, success) {
    $.ajax({
      url: '/api/session',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      }
    });
  },

  logout: function (cb) {
    $.ajax({
      url: 'api/session',
      type: 'DELETE',
      dataType: 'json',
      success: function () {
        console.log("logged out!");
        cb && cb()
        CurrentUserActions.receiveCurrentUser({});
      }
    });
  },

  fetchCurrentUser: function (cb) {
    $.ajax({
      url: '/api/session',
      type: 'GET',
      dataType: 'json',
      success: function (currentUser) {
        console.log("fetched current user!");
        CurrentUserActions.receiveCurrentUser(currentUser);
        cb && cb(currentUser);
      },
      error: function () {
        console.log("Failed to get session");
      }
    });
  }


};

module.exports = SessionsApiUtil;
