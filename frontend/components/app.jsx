var React = require('react');
var ListsIndex = require('./lists/lists_index');

var App = React.createClass({
  render: function () {
    return (

      <div>
        <header className="root-header">
          <nav className="root-header-nav group">

            <h1 className="root-header-logo">
              <a href="#">goodeats</a>
            </h1>

            <input type="text" name="name" placeholder="Edible / Group / Tag / Person" value="" />

            <ul className="root-header-list group">
              <li><a href="#">Home</a></li>
              <li><a href="#">My Lists</a></li>
              <li><a href="#">Groups</a></li>
              <li><a href="#">Recommendations</a></li>
              <li><a href="#">Explore</a></li>
            </ul>

            <ul className="root-header-icons group">
              <li><a href="#"><i className="fa fa-envelope"></i></a></li>
              <li><a href="#"><i className="fa fa-users"></i></a></li>
              <li><a href="#"><i className="fa fa-user"></i></a></li>
              <li><a href="#"><i className="fa fa-caret-square-o-down"></i></a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </nav>
        </header>

        <div className="main">{this.props.children}</div>

        <footer className="root-footer">
          <nav className="root-footer-nav group">
            <small className="root-footer-copy">
              &copy; 2016 Goodeats Inc
            </small>

            <ul className="root-footer-links group">
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  }
});

module.exports = App;
