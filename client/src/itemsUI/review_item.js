import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment-js';

const ReviewItem = (props) => {
    return (

        <div class="col-sm-4">
            <div class="thumbnail">
                <img src={props.image} alt="" style={{height: 240}}/>
                <p><strong>{props.name}</strong></p>
                <p style={{overflow: "hidden", height: 120}}>{props.review}</p>
                <p><strong>Rating: {props.rating}/10</strong></p>
                <p>Date: {moment(props.createAt).format("MM/DD/YY")}</p>
             
                <Link to={`/reviews/${props._id}`}>
                    <button type="btn" className="btn">VIEW</button>
                </Link>
            </div>
        </div>



    )
}

export default ReviewItem
