import React from 'react';
import axios from 'axios';

const Logout = (props) => {

    let request = axios.get(`/api/logout`)
                .then(request =>{
                    setTimeout(()=>{
                        props.history.push('/')
                    },500)
                })

    return (
        <div>
            <h1>
                Logout
            </h1>
        </div>
    );
};

export default Logout;