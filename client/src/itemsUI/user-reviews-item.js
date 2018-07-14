import React from 'react'
import { Link } from 'react-router-dom';
import './user-reviews-item.css';
import moment from 'moment-js';

const UserReviewsItem = (props) => {
    return (
        <div className="col-sm-4">
            <div className="thumbnail">
                <img src={props.image} alt="" className="img-class"/>
                <p><strong>{props.name}</strong></p>
                <p className="review">{props.review}</p>
                <p><strong>Review is made on: {moment(props.createAt).format("MM/DD/YY")}</strong></p>
                <button className="btn">VIEW</button>
                <Link to={`/user/edit-review/${props._id}`}>
                            <button type="btn" className="btn">EDIT</button>
                </Link>
            </div>
        </div>
    )
}

export default UserReviewsItem