var React = require('react');
var EdibleStore = require('./../../stores/edible');
var ApiUtil = require('./../../util/api_util');
var CurrentUserStore = require('./../../stores/current_user_store');
var SessionsApiUtil = require('./../../util/sessions_api_util');
var Button = require('./button.jsx');

var EdibleShow = React.createClass({

  getInitialState: function () {
    return {edible: null};
  },

  _onChange: function () {
    this.setState({edible: EdibleStore.find(parseInt(this.props.params.id))});
  },

  componentDidMount: function () {
    window.scrollTo(0, 0);
    this.edibleListener = EdibleStore.addListener(this._onChange);
    SessionsApiUtil.fetchCurrentUser();
    ApiUtil.fetchSingleEdible(this.props.params.id);
  },

  componentWillUnmount: function () {
    this.edibleListener.remove();
  },

  render: function () {
    var button,
        edibleImage,
        edibleName,
        edibleCategory,
        edibleDescription;

    if (this.state.edible) {
      button = <Button edibleId={this.state.edible.id} currentUser={CurrentUserStore.currentUser()} />;
      edibleImage = <img className="edible-show-image" src={this.state.edible.image_url} />;
      edibleName = <h1 className="edible-show-name">{this.state.edible.name}</h1>;
      edibleCategory = <h2 className="edible-show-category">{this.state.edible.category}</h2>;
      edibleDescription = <p className="edible-show-description">{this.state.edible.description}</p>;
    }

    return (
      <div className="edible-show">
        <div className="edible-details group">

          <div className="edible-image">
            {edibleImage}
            {button}
          </div>

          <div className="edible-show-info">
            {edibleName}
            {edibleCategory}
            {edibleDescription}
          </div>
        </div>

        <div className="edible-reviews">
          <p className="reviews-heading">Community Reviews</p>
          {this.props.children}
        </div>

      </div>
    );
  }
});

module.exports = EdibleShow;
