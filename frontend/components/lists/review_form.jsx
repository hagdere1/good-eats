var React = require('react');
var History = require('react-router').History;
var ApiUtil = require('./../../util/api_util');

var ReviewForm = React.createClass({
  mixins: [History],

  submit: function (e) {
    e.preventDefault();

    var data = $(e.currentTarget);
    ApiUtil.createReview(data);
  },

  doNothing: function (e) {
    e.stopPropagation();
  },

  render: function() {
    if (!this.props.reviewFormShowing) {
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
                <input type="hidden" name="edible_id" value={this.props.edible.id} />

                <label>
                  Title
                  <input type="text" name="title" className="review-form-input-text"/>
                </label>

                <textarea name="body" rows="8" cols="40" placeholder="Your thoughts..." className="review-form-input-textarea"></textarea>

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
