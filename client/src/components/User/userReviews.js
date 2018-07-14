import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserReviews } from '../../actions/reviews';

import { Link } from 'react-router-dom';

import UserReviewsItems from '../../itemsUI/user-reviews-item';

class UserReviews extends Component {

    componentWillMount(){
        this.props.dispatch(getUserReviews(this.props.user.login.id))
    }

    showUserReviews = (user) => (
        user.userReviews ?
            user.userReviews.map(item => (
                <UserReviewsItems {...item} key={item._id} />
            ))
        : null
    )

    render(){
        let user = this.props.user;
        return (
            <div className="container bg-3 text-center">
                <div className="row">
                    <h2 className="center">MY REVIEWS </h2>
                    <br />
                            {this.showUserReviews(user)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }

}

export default connect(mapStateToProps)(UserReviews)