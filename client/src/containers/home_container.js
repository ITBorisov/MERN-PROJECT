import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getReviews } from '../actions/reviews';

import BookItem from '../itemsUI/book_item';

export class HomeContainer extends Component {

  componentWillMount() {
    this.props.dispatch(getReviews(3, 0, 'desc'))
  }

  renderItems = (reviews) => (
    reviews.list ?
      reviews.list.map(item => (
        <BookItem {...item} key={item._id} />
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
          <div className="loadmore" onClick={this.loadMore}>Load More</div>
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
