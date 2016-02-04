var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ListStore = new Store(AppDispatcher);
var ListConstants = require('../constants/list_constants');

var _lists = {};

ListStore.all = function () {
  var lists = [];
  for (var id in _lists) {
    lists.push(_lists[id]);
  }
  return lists;
};

ListStore.resetLists = function (lists) {
  _lists = {};
  lists.forEach(function (list) {
    _lists[list.id] = list;
  });
};

ListStore.resetList = function (list) {
  _lists[list.id] = list;
};

ListStore.find = function (id) {
  return _lists[id];
};

ListStore.destroyList = function (id) {
  delete _lists[id];
};

ListStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ListConstants.LISTS_RECEIVED:
      this.resetLists(payload.lists);
      ListStore.__emitChange();
      break;
    case ListConstants.LIST_RECEIVED:
      this.resetList(payload.list);
      ListStore.__emitChange();
      break;
    case ListConstants.LIST_DESTROYED:
      this.destroyList(payload.id);
      ListStore.__emitChange();
      break;
  }
};

window.ListStore = ListStore;
module.exports = ListStore;
