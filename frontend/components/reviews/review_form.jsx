var React = require('react');

var ReviewForm = React.createClass({
  render: function () {
    return (
      <form action="" method="POST">

        <fieldset className="">
          <label>Title
            <input type="text" name="user[name]" placeholder="Name" value="">
          </label>

          <label>Review
            <input type="text" name="user[email]" placeholder="Email" value="">
          </label>

          <input type="hidden" name="" value="">
          <input type="hidden" name="" value="">

          <button class="auth-form-button">Sign up</button>
        </fieldset>

      </form>
    );
  }
});

module.exports = ReviewForm;
