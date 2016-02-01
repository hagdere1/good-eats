var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ListItemStore = new Store(AppDispatcher);
var ListItemConstants = require('../constants/list_item_constants');

var _listItems = {};

ListItemStore.all = function () {
  var listItems = [];
  for (var id in _listItems) {
    listItems.push(_listItems[id]);
  }
  return listItems;
};

ListItemStore.resetListItems = function (listItems) {
  _listItems = {};
  listItems.forEach(function (listItem) {
    _listItems[listItem.id] = listItem;
  });
};

ListItemStore.resetListItem = function (listItem) {
  _listItems[listItem.id] = listItem;
};

ListItemStore.find = function (id) {
  return _listItems[id];
};

ListItemStore.destroy = function (id) {
  delete _listItems[id];
};

ListItemStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ListItemConstants.LIST_ITEMS_RECEIVED:
      this.resetListItems(payload.listItems);
      ListItemStore.__emitChange();
      break;
    case ListItemConstants.LIST_ITEM_RECEIVED:
      this.resetListItem(payload.listItem);
      ListItemStore.__emitChange();
      break;
    case ListItemConstants.LIST_ITEM_DESTROYED:
      this.destroy(payload.listItem.id);
      ListItemStore.__emitChange();
      break;
  }
};

window.ListItemStore = ListItemStore;
module.exports = ListItemStore;
