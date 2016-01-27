var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _edibles = [];
var EdibleStore = new Store(AppDispatcher);

EdibleStore.all = function () {
  return _edibles.slice(0);
};

window.EdibleStore = EdibleStore;
module.exports = EdibleStore;
