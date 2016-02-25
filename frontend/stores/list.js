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

ListStore.destroyListItem = function (listItem) {
  var listItems = _lists[listItem.list_id].list_items;
  for (var i = 0; i < listItems.length; i++) {
    if (_lists[listItem.list_id].list_items[i].id === listItem.id) {
      delete _lists[listItem.list_id].list_items[i];
      break;
    }
  }
};

ListStore.addReview = function (review, listId) {
  var listItems = _lists[listId].list_items;
  for (var i = 0; i < listItems.length; i++) {
    if (listItems[i].edible_id === review.edible_id) {
      _lists[listId].list_items[i].reviews.push(review);
      break;
    }
  }
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
    case ListItemConstants.LIST_ITEM_DESTROYED:
      this.destroyListItem(payload.listItem);
      ListStore.__emitChange();
      break;
    case ReviewConstants.REVIEW_RECEIVED:
      this.addReview(payload.review, payload.listId);
      ListStore.__emitChange();
      break;
  }
};

// window.ListStore = ListStore;
module.exports = ListStore;
