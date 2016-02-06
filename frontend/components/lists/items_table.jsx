var React = require('react');
var ApiUtil = require('../../util/api_util');
var ListStore = require('../../stores/list');
var ReviewForm = require('./review_form');

var ItemsTable = React.createClass({
  getInitialState: function () {
    return this.getListItems();
  },

  getListItems: function () {
    var list = ListStore.find(parseInt(this.props.listId));
    return { edibles: list.list_items,
             reviewFormShowing: false,
             reviewEdible: null};
  },

  _onChange: function () {
    this.setState(this.getListItems());
  },


  componentDidMount: function () {
    this.listListener = ListStore.addListener(this._onChange);
    ApiUtil.fetchSingleList(parseInt(this.props.listId));
  },

  componentWillUnmount: function () {
    this.listListener.remove();
  },

  destroyListItem: function (event) {
    event.preventDefault();
    ApiUtil.destroyListItem(event.currentTarget.id);
  },

  handleReviewClick: function (edible, e) {
    e.preventDefault();
    this.setState({reviewFormShowing: true,
                   reviewEdible: edible});
  },

  closeReviewForm: function () {
    this.setState({reviewFormShowing: false,
                   reviewEdible: null});
  },

  render: function () {
    var header = (
      <thead className="item-detail-table-head">
        <tr className="item-detail-table-headers-row">
          <th className="item-heading-image">image</th>
          <th className="item-heading-name">name</th>
          <th className="item-heading-category">category</th>
          <th className="item-heading-date-eaten">date eaten</th>
          <th className="item-heading-date-added">date added</th>
          <th className="item-heading-options"></th>
        </tr>
      </thead>
    );

    if (this.state.edibles === undefined) {
      return (
        <div>
          <table className="item-detail-table">
            {header}
            <tbody className="item-detail-table-body group">
            </tbody>
          </table>

        </div>
      );
    }

    var tableBody = (
      this.state.edibles.map(function (edible) {
        return (
          <tr className="item-detail-table-row" key={edible.id}>
            <td><img src={edible.image_url} className="item-detail-image"/></td>
            <td className="list-table-name"><a href={"#/edibles/" + edible.edible_id}>{edible.name}</a></td>
            <td>{edible.category}</td>
            <td>{edible.date_eaten}</td>
            <td>{edible.created_at}</td>
            <td className="list-table-buttons">
              <button onClick={this.handleReviewClick.bind(this, edible)} edible={edible} className="list-table-button-review">Review</button><br/>
              <button id={edible.id} onClick={this.destroyListItem} className="list-table-button-delete">Delete</button>
            </td>
          </tr>
        );
      }, this)
    );

    return (
      <div>
        <ReviewForm closeForm={this.closeReviewForm} reviewFormShowing={this.state.reviewFormShowing} edible={this.state.reviewEdible}/>
        <table className="item-detail-table">
          {header}

          <tbody className="item-detail-table-body group">
            {tableBody}
          </tbody>
        </table>
      </div>
    );
  }
});


module.exports = ItemsTable;
