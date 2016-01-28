var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var EdibleStore = new Store(AppDispatcher);
var EdibleConstants = require('../constants/edible_constants');

var _edibles = {};

EdibleStore.all = function () {
  var edibles = [];
  for (var id in _edibles) {
    edibles.push(_edibles[id]);
  }
  return edibles;
};

EdibleStore.resetEdibles = function (edibles) {
  _edibles = {};
  edibles.forEach(function (edible) {
    _edibles[edible.id] = edible;
  });
};

EdibleStore.resetEdible = function (edible) {
  _edibles[edible.id] = edible;
};

EdibleStore.find = function (id) {
  return _edibles[id];
};

EdibleStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case EdibleConstants.EDIBLES_RECEIVED:
      this.resetEdibles(payload.edibles);
      EdibleStore.__emitChange();
      break;
    case EdibleConstants.EDIBLE_RECEIVED:
      this.resetEdible(payload.edible);
      EdibleStore.__emitChange();
      break;
  }
};

window.EdibleStore = EdibleStore;
module.exports = EdibleStore;
