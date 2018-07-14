import React, { Component } from 'react'
import { getReviewWithReviewer } from '../../actions/reviews';
import moment from 'moment-js';
import { connect } from 'react-redux';

const style ={
    color: "black",
    height: '80vh',
    paddingTop: "30px",
    width: "50%",
    margin: "0 auto",
}

export class MoviesView extends Component {

    componentWillMount() {
        this.props.dispatch(getReviewWithReviewer(this.props.match.params.id))
    }

    renderBook = (reviews) => (
        reviews.review ?
        <div className="well" style={style}>
        <div className="media">
          <a className="pull-left" href="#">
            <img className="media-object" src={reviews.review.image} style={{width: 700}} />
          </a>
          <div className="media-body">
            <h4 className="media-heading">{reviews.review.name}</h4>
            <p className="text-right">{reviews.review.author}</p>
            <p>{reviews.review.review}</p>
            <ul className="list-inline list-unstyled">
              <li><span><i className="glyphicon glyphicon-calendar" /> {moment(reviews.review.createdAt).format("MM/DD/YY")} </span></li>
              <li>|</li>
              <span><i className="glyphicon glyphicon-comment" /> 2 comments</span>
              <li>|</li>
              <li>
                <span className="glyphicon glyphicon-star" />
                <span className="glyphicon glyphicon-star" />
                <span className="glyphicon glyphicon-star" />
                <span className="glyphicon glyphicon-star" />
                <span className="glyphicon glyphicon-star-empty" />
              </li>
              <li>|</li>
              <li>
                {/* Use Font Awesome http://fortawesome.github.io/Font-Awesome/ */}
                <span><i className="fa fa-facebook-square" /></span>
                <span><i className="fa fa-twitter-square" /></span>
                <span><i className="fa fa-google-plus-square" /></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
        : null
    );
        
    render() {
            let reviews = this.props.reviews;
            console.log(reviews);
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
