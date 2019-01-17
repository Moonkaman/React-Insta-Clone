import React, { Component } from 'react';

import LoginForm from './LoginForm';

//import './Login.css'

class LoginPage extends Component {
  constructor() {
    super();
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

  logIn = _ => {
    console.log('ay');
    if(this.state.usernameInput !== '') {
      localStorage.setItem('nb-insta-username', this.state.usernameInput);
    } else {
      alert('Please enter a username')
    }
  }

  render() {
    return (
      <div className='login-cont'>
        <LoginForm usernameInput={this.state.usernameInput} passwordInput={this.state.passwordInput} handleChange={this.handleChange} logIn={this.logIn} />
      </div>
    )
  }
}

export default LoginPage;

