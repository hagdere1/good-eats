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
  },
  receiveAllLists: function (lists) {
    AppDispatcher.dispatch({
      actionType: ListConstants.LISTS_RECEIVED,
      lists: lists
    });
  },
  receiveSingleList: function (list) {
    AppDispatcher.dispatch({
      actionType: ListConstants.LIST_RECEIVED,
      list: list
    });
  }
};

module.exports = ApiActions;
