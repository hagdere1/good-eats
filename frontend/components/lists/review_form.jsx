var React = require('react');
var History = require('react-router').History;
var ApiUtil = require('./../../util/api_util');

var ReviewForm = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {title: "",
            body: ""};
  },

  submit: function (e) {
    e.preventDefault();
    var review = {};
    debugger
    review.edible_id = this.props.edible.edible_id;
    review.title = this.state.title;
    review.body = this.state.body;

    ApiUtil.createReview(review);
    this.props.closeForm();
  },

  doNothing: function (e) {
    e.stopPropagation();
  },

  handleTitleChange: function (e) {
    this.setState({title: e.target.value});
  },

  handleBodyChange: function (e) {
    this.setState({body: e.target.value});
  },

  render: function() {

    if ((!this.props.reviewFormShowing) || (!this.props.edible)) {
      return <div></div>;
    }
    else {
      return (
        <div className="modal-container">
          <div className="review-modal group" onClick={this.doNothing}>

            <div className="review-form-image">
              <img src={this.props.edible.image_url} />
            </div>

            <form onSubmit={ this.submit } className="review-form">
              <div className="review-form-details">
                <h1 className="review-form-edible">{this.props.edible.name}</h1>
                <p>{this.props.edible.category}</p>

                <label>
                  Title
                  <input type="text" name="title" onChange={this.handleTitleChange} value={this.state.title} className="review-form-input-text"/>
                </label>

                <textarea name="body" rows="8" cols="40" onChange={this.handleBodyChange} placeholder="What are your thoughts?" value={this.state.body} className="review-form-input-textarea"></textarea>

                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  },

});

module.exports = ReviewForm;
