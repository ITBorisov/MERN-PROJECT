import React, { Component } from 'react'
import { getUsers } from '../../actions/auth';
import { connect } from 'react-redux';
import moment from 'moment-js';
import './Critics.css';

export class Critics extends Component {


    componentWillMount() {
        this.props.dispatch(getUsers());
    }

    showCritics = (user) => (
        user.users ?
            user.users.map(item => (
                <tr data-status="pagado" key={item._id}>
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

    render() {
        let user = this.props.user;
        console.log(user);
        return (
            <div className="container">
                <section className="content">
                    <br />
                    <div className="col-md-10 col-md-offset-1">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h2 className="text-center">ALL CRITICS</h2>
                                <div className="table-container">
                                    <table className="table table-filter">
                                        <tbody>
                                            {this.showCritics(user)}
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

export default connect(mapStateToProps)(Critics)
