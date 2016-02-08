var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var ListsIndex = require('./components/lists/lists_index');
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

var routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ EdiblesIndex } onEnter={_ensureLoggedIn}/>
    <Route path="login" component={ SessionForm } />
    <Route path="users/new" component={ UserForm } />
    <Route path="users/:id" component={ UserShow } />
    <Route path="edibles" component={ EdiblesIndex } />
    <Route path="edibles/:id" component={ EdibleShow }>
      <IndexRoute component={ ReviewIndex } />
    </Route>
    <Route path="lists" component={ ListsIndex }>
      <Route path=":id" component={ ListShow } />
    </Route>
    <Route path="profile" component={ Profile } onEnter={_ensureLoggedIn} />
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
