var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var EdibleStore = new Store(AppDispatcher);
var EdibleConstants = require('../constants/edible_constants');

var _edibles = [];

EdibleStore.all = function () {
  return _edibles.slice(0);
};

EdibleStore.resetEdibles = function (edibles) {
  _edibles = edibles;
};

EdibleStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case EdibleConstants.EDIBLES_RECEIVED:
      this.resetEdibles(payload.edibles);
      EdibleStore.__emitChange();
      break;
  }
};

window.EdibleStore = EdibleStore;
module.exports = EdibleStore;
