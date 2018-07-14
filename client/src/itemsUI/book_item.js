import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment-js';

const BookItem = (props) => {
    return (

        <div class="col-sm-4">
            <div class="thumbnail">
                <img src={props.image} alt="" />
                <p><strong>{props.name}</strong></p>
                <p>{moment(props.createAt).format("MM/DD/YY")}</p>
             
                <Link to={`/reviews/${props._id}`}>
                    <button type="btn" className="btn">VIEW</button>
                </Link>
            </div>
        </div>



    )
}

export default BookItem
