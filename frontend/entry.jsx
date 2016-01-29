var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var ListStore = require('./stores/list');
var ApiUtil = require('./util/api_util');
var ListsIndex = require('./components/lists/lists_index');
var ListsIndexItem = require('./components/lists/lists_index_item');
var ListItemStore = require('./stores/list_item');
var App = require('./components/app');
var IndexRoute = require('react-router').IndexRoute;
// Delete testing vars

var routes = (
  <Route path="/" component={App}>
    <Route path="lists" component={ListsIndex}>
      <Route path="/list/:id" component={ListsIndexItem}/>
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
