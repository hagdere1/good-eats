var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var EdiblesIndex = require('./components/edibles_index');
var EdibleStore = require('./stores/edible');
var ApiUtil = require('./util/api_util');
var Edible = require('./components/edible');
var EdibleDetail = require('./components/edible_detail');

var App = React.createClass({
  render: function () {
    return (
      <div className="main">
        <EdiblesIndex />
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
