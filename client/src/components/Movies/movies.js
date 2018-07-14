import React, { Component } from 'react'
import { getReviewWithReviewer } from '../../actions/reviews';
import moment from 'moment-js';
import { connect } from 'react-redux';

export class MoviesView extends Component {

    componentWillMount() {
        this.props.dispatch(getReviewWithReviewer(this.props.match.params.id))
    }

    renderBook = (reviews) => (
        reviews.review ?
        <div className="row">
        <div class="col-sm-6 center">
            <div class="thumbnail">
                <img src={reviews.review.image} alt="" />
               
            </div>
        </div>
        <div class="col-sm-6 center">
         <h2><strong>Title: {reviews.review.name}</strong></h2>
         <h4><strong>{reviews.review.review}</strong></h4>
                <p>Date: {moment(reviews.review.createAt).format("MM/DD/YY")}</p>
        </div>
        </div>
        : null
    );
        
    render() {
            let reviews = this.props.reviews;
        
            return (
                <div>
                    {this.renderBook(reviews)}
                </div>
            )
    }
}
        
function mapStateToProps(state) {
    return {
            reviews: state.reviews
            }
}
        
export default connect(mapStateToProps)(MoviesView)
