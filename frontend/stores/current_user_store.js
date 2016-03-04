var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var CurrentUserConstants = require('../constants/current_user_constants');

var _currentUser = {};
var _currentUserHasBeenFetched = false;
var CurrentUserStore = new Store(AppDispatcher);

CurrentUserStore.currentUser = function () {
  return $.extend({}, _currentUser);
};

CurrentUserStore.isLoggedIn = function () {
  return !!_currentUser.id;
};

CurrentUserStore.signOut = function () {
	_currentUser = {};
  CurrentUserStore.__emitChange();
};

CurrentUserStore.userHasBeenFetched = function () {
  return _currentUserHasBeenFetched;
};

CurrentUserStore.destroyListItem = function (listItem) {
  var listItems = _currentUser.list_items;
  for (var i = 0; i < listItems.length; i++) {
    if (_currentUser.list_items[i] === listItem.id) {
      delete _currentUser.list_items[i];
      break;
    }
  }
};

CurrentUserStore.__onDispatch = function (payload) {
  if (payload.actionType === CurrentUserConstants.RECEIVE_CURRENT_USER) {
    _currentUserHasBeenFetched = true;
    _currentUser = payload.currentUser;
    CurrentUserStore.__emitChange();
  }
  else if (payload.actionType === CurrentUserConstants.LOG_OUT) {
		CurrentUserStore.signOut();
  }
  else if (payload.actionType === ListItemConstants.LIST_ITEM_DESTROYED) {
    this.destroyListItem(payload.listItem);
    CurrentUserStore.__emitChange();
  }
};

module.exports = CurrentUserStore;
