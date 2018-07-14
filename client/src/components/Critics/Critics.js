import React, { Component } from 'react'
import { getUsers } from '../../actions/auth';
import { connect } from 'react-redux';

export class Critics extends Component {


    componentWillMount() {
        this.props.dispatch(getUsers());
    }

    showCritics = (user) => (
        user.users ?
            user.users.map(item => (
                <tr key={item._id}>
                    <img style={{height: 150}}src={item.image} />
                    <th>{item.name} </th>
                    <th>2 years</th>
                    <th>{item.email}</th>
                </tr>
            ))

            : null
    )

    render() {
        let user = this.props.user;
        console.log(user);
        return (
            <div className="container" style={{margin: 0}}>
                <h1 className="text-center">CRITICS</h1>
                <table className="table text-center" style={{width: "70%"}}>
                    <thead>
                        <tr>
                            <th>Avatar:</th>
                            <th>Name: </th>
                            <th>Experiance:</th>
                            <th>Email: </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showCritics(user)}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Critics)
