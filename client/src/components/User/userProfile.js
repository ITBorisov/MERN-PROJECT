import React from 'react';
import './userProfile.css';

const divStyle = {
    margin: '0 auto'
};

const UserProfile = (props) => {
    let user = props.user.login;
    console.log(user);
    return (
        <div className="container">
            <div className="row" style={{margin: "0 auto"}}>
                <div className="col-md-6  col-md-offset-2 mb30" >
                    <div className="tutor-block">
                        <div className="tutor-img">
                            <img src={user.image} />
                        </div>
                        <div className="tutor-content">
                            <h5 className="tutor-title">{user.name}</h5>
                            <span className="tutor-designation">({user.email})</span>
                            <p>{user.description}</p>
                        </div>
                    </div>
                    <div className="social-media">
                        <span><a href="#"><i className="fa fa-facebook-square" /></a></span>
                        <span><a href="#"><i className="fa  fa-twitter-square" /></a></span>
                        <span><a href="#"><i className="fa   fa-youtube-square" /></a></span>
                        <span><a href="#"><i className="fa  fa-linkedin-square" /></a></span>
                        <span><a href="#"><i className="fa   fa-instagram" /></a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;