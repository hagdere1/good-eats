var React = require('react');
var ApiUtil = require('./../../util/api_util');
var Button = require('./button');

var Edible = React.createClass({
  render: function () {
    var url = "#/edibles/" + this.props.edible.id;
    return (
      <li className="edible-list-item">
        <a href={url}>
          <p>{this.props.edible.name}</p>
          <img className="edible-list-item-image" src={this.props.edible.image_url} />
        </a>
        <Button edibleId={this.props.edible.id} currentUser={this.props.currentUser} />
      </li>
    );
  }
});

module.exports = Edible;
