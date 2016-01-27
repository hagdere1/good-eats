var React = require('react');
var ReactDOM = require('react-dom');
var Edible = require('./components/edibles_index');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <EdiblesIndex />,
    document.getElementById('content')
  );
});
