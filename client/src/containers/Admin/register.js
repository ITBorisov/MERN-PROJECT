import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { userRegister, getUsers } from './../../actions/auth';
import moment from 'moment-js';

import './register.css';

class Register extends PureComponent {

    state = {
        name: '',
        email: '',
        description: '',
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
                <tr data-status="pagado" key={item._id}>
                    <td>
                        <div className="ckbox">
                          <input type="checkbox" id="checkbox1" />
                          <label htmlFor="checkbox1" />
                        </div>
                    </td>
                <td>
                    <a href="" className="star">
                        <i className="glyphicon glyphicon-star" />
                    </a>
                </td>
                <td>
                    <div className="media">
                        <a href="#" className="pull-left">
                            <img src={item.image} className="media-photo" style={{width: 100}}/>
                        </a>
                        <div className="media-body">
                            <span className="media-meta pull-right">Registered: {moment(item.registerAt).format("MM/DD/YY")}</span>
                            <h4 className="title">
                                {item.name}
                            </h4>
                            <p className="summary">Experience: {item.description}</p>
                        </div>
                    </div>
                </td>
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
                description: '',
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
                <h2 className="center">ADD NEW CRITIC</h2>
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
                            <label>Description(experience):</label>
                            <textarea 
                                className="form-control" 
                                rows="5" 
                                name="description"
                                onChange={this.onChange}
                                value={this.state.description}
                                >
                                
                            </textarea>
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
                <section className="content">
                    <br />
                    <div className="col-md-12 ">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h2 className="text-center">ALL CRITICS</h2>
                                <div className="table-container">
                                    <table className="table table-filter">
                                        <tbody>
                                            {this.showUsers(user)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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