var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
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
    );
  }
});

module.exports = Header;
