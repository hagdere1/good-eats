var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

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

var App = require('./components/app');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ EdiblesIndex }/>
    <Route path="edibles" component={ EdiblesIndex } />
    <Route path="edibles/:id" component={ EdibleShow } />
    <Route path="lists/:id" component={ ListShow } />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
