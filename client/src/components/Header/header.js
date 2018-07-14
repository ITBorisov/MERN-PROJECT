import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.css';

class Header extends Component {

  state = {

  }

  showUserPosts = (user) => (
    user.login ? 
      user.login.isAuth ? 
        <React.Fragment>
        <li className=""><Link to="/user"><span className="	glyphicon glyphicon-user"></span> PROFILE</Link></li>
        <li className=""><Link to="/user/reviews"><span className="	glyphicon glyphicon-duplicate"></span> MY REVIEWS</Link></li>
        <li className=""><Link to="/user/add"><span className="glyphicon glyphicon-pencil"></span> ADD REVIEW</Link></li>
        <li><Link to="/user/register"><span className="glyphicon glyphicon-log-in"></span> DASHBOARD</Link></li>
        <li><Link to="/logout"><span className="glyphicon glyphicon-log-in"></span> LOGOUT</Link></li>
        </React.Fragment>
      : <React.Fragment>
        <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> LOGIN</Link></li>
        </React.Fragment>  
    : null


)


  render() {

    const user = this.props.user
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">Movie Review</Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active"><Link to="/"><span className="glyphicon glyphicon-film"></span> REVIEWS</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
      
                {this.showUserPosts(user)}
                
              </ul>
            </div>
          </div>
        </nav>

        <div className="jumbotron">
          <div className="container text-center">
         
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
      user: state.user
  }
}

export default connect(mapStateToProps)(Header)