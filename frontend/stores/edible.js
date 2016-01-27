var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var EdibleStore = new Store(AppDispatcher);
var EdibleConstants = require('../constants/edible_constants');

var _edibles = [];
// var CHANGE_EVENT = "change";

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

// EdibleStore.__emitChange = function () {
//   this.emit(CHANGE_EVENT);
// };
//
// EdibleStore.addChangeListener = function (callback) {
//   this.on(CHANGE_EVENT, callback);
// };
//
// EdibleStore.removeChangeListener = function (callback) {
//   this.removeListener(CHANGE_EVENT, callback);
// };

window.EdibleStore = EdibleStore;
module.exports = EdibleStore;
