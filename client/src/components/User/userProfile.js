import React from 'react';

const UserProfile = (props) => {
    let user = props.user.login;
    console.log(user);
    return (
        <div className="container">
            <div className="row">
                <div className="people-cards">
                    <div className="col-md-6" >
                        <div className="row">
                            <div className="profile-image">
                                <img src="https://higherlogicdownload.s3.amazonaws.com/MBGH/4f7f512a-e946-4060-9575-b27c65545cb8/UploadedImages/Board%20Photos/SIZE%20150x190/PAMELA%20HANNON%202015.jpg" />
                            </div>
                            <div className="profile-info">
                                <h3 div className="company">Company Name</h3>
                                <h4 div className="name">Person Name</h4>
                                <h5 div className="title">Job Title</h5>
                            </div>
                            <div className="profile-link">
                                <a href="">VIEW PROFILE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;