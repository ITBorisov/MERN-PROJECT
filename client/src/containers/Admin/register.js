import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { userRegister, getUsers } from './../../actions/auth';


import './register.css';

class Register extends PureComponent {

    state = {
        name: '',
        email: '',
        image: '',
        password: '',
        error: ''
    }

    componentWillMount() {
        this.props.dispatch(getUsers());
    }

    showUsers = (user) => (
        user.users ?
            user.users.map(item => (
                <tr key={item._id}>
                    <img src={item.image} style={{width: 100}}/>
                    <th>{item.name} </th>
                    <th>2 years</th>
                    <th>{item.email}</th>
                </tr>
            ))

            : null
    )

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.register === false){
            this.setState({error:'Problem'})
        } else{
            this.setState({
                name:'',
                image:'',
                email:'',
                password:''
            })
        }
    }

    addAdmin = (e) => {
        e.preventDefault();
        this.setState({error:''})

        this.props.dispatch(userRegister(this.state, this.props.user.users))
    }

    render() {
        let user = this.props.user;
        console.log(user);
        return (
            <div className="container">
                <h2 className="center">ADD NEW USER</h2>
                <form onSubmit={this.addAdmin}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            onChange={this.onChange}
                            value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={this.onChange}
                            value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <label>Image: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="image"
                            onChange={this.onChange}
                            value={this.state.image} />
                    </div>
                    <div className="form-group">
                        <label>password: </label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange} />
                    </div>

                    <button type="submit" className="btn btn-default">ADD USER</button>
                </form>
                <br />
                <h1 className="text-center">Users</h1>
                <table className="table" style={{width: "70%"}}>
                    <thead>
                        <tr>
                            <th>Avatar:</th>
                            <th>Name: </th>
                            <th>Experiance:</th>
                            <th>Email: </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUsers(user)}
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

export default connect(mapStateToProps)(Register)