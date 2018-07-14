import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getReviews } from '../actions/reviews';

import ReviewItem from '../itemsUI/review_item';

export class HomeContainer extends Component {

  componentWillMount() {
    this.props.dispatch(getReviews(3, 0, 'desc'))
  }

  renderItems = (reviews) => (
    reviews.list ?
      reviews.list.map(item => (
        <ReviewItem {...item} key={item._id} />
      ))
      : null
  )

  loadMore = () => {
    let count = this.props.reviews.list.length;

    this.props.dispatch(getReviews(1, count, 'desc', this.props.reviews.list))
  }

  render() {
    console.log(this.props);
    return (
      <div className="container bg-3 text-center">

        <div className="row">
          <h2>ALL REVIEWS</h2>
          <br />
          {this.renderItems(this.props.reviews)}
          <br />
          <br />

        </div>
        <div>
          <button className="btn" onClick={this.loadMore}>Load More</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reviews: state.reviews
  }
}



export default connect(mapStateToProps)(HomeContainer)
