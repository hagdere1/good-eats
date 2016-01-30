var React = require('react');

var Footer = React.createClass({
  render: function () {
    return (
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
    );
  }
});

module.exports = Footer;
