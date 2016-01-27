var AppDispatcher = require('../dispatcher/dispatcher');
var EdibleConstants = require('../constants/edible_constants');

var ApiActions = {
  receiveAllEdibles: function (edibles) {
    AppDispatcher.dispatch({
      actionType: EdibleConstants.EDIBLES_RECEIVED,
      edibles: edibles
    });
  }
};

module.exports = ApiActions;
