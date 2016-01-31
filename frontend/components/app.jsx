var React = require('react');
var Header = require('./header');
var Footer = require('./footer');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <div className="main">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
});

module.exports = App;
