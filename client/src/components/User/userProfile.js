import React from 'react';

const divStyle = {
    margin: '0 auto'
};

const UserProfile = (props) => {
    let user = props.user.login;
    console.log(user);
    return (
        <div className="container">
            <div className="row">
                <div className="people-cards">
                    <div style={divStyle} >
                        <div className="row">
                            <div className="profile-image" style={divStyle}>
                                <img src={user.image} style={{width: 250}}/>
                            </div>
                            <div className="profile-info">
                                <h3 div style={divStyle}>{user.name}</h3>
                                <h4 div className="name">{user.email}</h4>
                                <h5 div className="title"></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;