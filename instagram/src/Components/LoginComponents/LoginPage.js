import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginForm from './LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: '',
      passwordInput: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className='login-cont'>
        <LoginForm usernameInput={this.state.usernameInput} passwordInput={this.state.passwordInput} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default LoginPage;

