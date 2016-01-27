var React = require('react');
var ReactDOM = require('react-dom');
var Edible = require('./components/edibles_index');
var EdibleStore = require('./stores/edible');
var ApiUtil = require('./util/api_util');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <EdiblesIndex />,
    document.getElementById('content')
  );
});
