var AppDispatcher = require('../dispatcher/dispatcher');
var EdibleConstants = require('../constants/edible_constants');

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
  }
};

module.exports = ApiActions;
