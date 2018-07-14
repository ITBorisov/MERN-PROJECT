import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/auth';

export class Login extends Component {

  state = {
    email: '',
    password: '',
    error: '',
    success: false
  }

  

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.user.login.isAuth){
      this.props.history.push('/user')
    }
  }

  loginForm = (e) => {
      e.preventDefault();
      
      this.props.dispatch(loginUser(this.state))
  }

  render() {
    return (
      <div className="container">
      
        <h2 className="text-center" style={{margin: 10}}>Login</h2>
        <form onSubmit={this.loginForm} style={{width: 500, margin: "0 auto"}}>
            <div className="form-group">
            <label>Email: </label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter valid email" 
              name="email" 
              value={this.state.email}
              onChange={this.onChange}/>
            </div>
            <div className="form-group">
            <label>Password: </label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Enter password" 
              name="password" 
              value={this.state.password}
              onChange={this.onChange}/>
            </div>
            <button type="submit" className="btn btn-default">LOGIN</button>
        </form>

          
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state);
    return {
        user: state.user
    }
}



export default connect(mapStateToProps)(Login)
