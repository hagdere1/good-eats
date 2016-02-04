var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var ListStore = require('./stores/list');
var ListItemStore = require('./stores/list_item');
var ApiUtil = require('./util/api_util');
// Delete testing vars

var ListsIndex = require('./components/lists/lists_index');
var ListsIndexItem = require('./components/lists/lists_index_item');
var EdiblesIndex = require('./components/edibles/edibles_index');
var Edible = require('./components/edibles/edible');
var EdibleShow = require('./components/edibles/edible_show');
var ListShow = require('./components/lists/list_show');
var ReviewIndex = require('./components/reviews/review_index');
var Profile = require('./components/profile/profile');

// React auth
var UsersIndex = require('./components/users/users_index');
var UserShow = require('./components/users/user_show');
var SessionForm = require('./components/sessions/new');
var UserForm = require('./components/users/user_form');
var CurrentUserStore = require('./stores/current_user_store');
var SessionsApiUtil = require('./util/sessions_api_util');

var App = require('./components/app');

//Delete one ensureLoggedIn
var routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ UsersIndex } onEnter={_ensureLoggedIn}/>
    <Route path="login" component={ SessionForm } />
    <Route path="users/new" component={ UserForm } />
    <Route path="users/:id" componet={ UserShow } onEnter={_ensureLoggedIn} />
    <Route path="edibles" component={ EdiblesIndex } onEnter={_ensureLoggedIn} />
    <Route path="edibles/:id" component={ EdibleShow } onEnter={_ensureLoggedIn}>
      <IndexRoute component={ ReviewIndex } onEnter={_ensureLoggedIn} />
    </Route>
    <Route path="lists" component={ ListsIndex } onEnter={_ensureLoggedIn}>
      <Route path=":id" component={ ListShow } onEnter={_ensureLoggedIn} />
    </Route>
    <Route path="profile" component={ Profile } />
  </Route>
);

function _ensureLoggedIn(nextState, replace, callback) {
  if (CurrentUserStore.userHasBeenFetched()) {
    _redirectIfNotLoggedIn();
  } else {
    SessionsApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
  }

  function _redirectIfNotLoggedIn() {
    if (!CurrentUserStore.isLoggedIn()) {
      replace({}, "/login");
    }
    callback();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
