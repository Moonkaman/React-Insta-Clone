import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import instaImg from '../../imgs/instalogo.png'

const LoginFormWrapper = styled.form`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginFormStack = styled.div`
  border: 1px solid lightgray;
  padding: 50px 60px;
  border-radius: 6px;
`

const LoginImg = styled.img`
  max-width: 160px;
  height: auto;
  margin-bottom: 10px;
`

const LoginInput = styled.input`
  display: block;
  outline: none;
  border: none;
  font-size: 18px;
  padding: 10px 0 10px 10px;
  margin-bottom: 10px;
  background: #f2f2f2;
  border-radius: 6px;
`

const LoginButton = styled.button`
  margin-top: 20px;
  background: #3498db;
  outline: none;
  border: none;
  width: 229px;
  color: white;
  padding: 10px 0;
  font-weight: bold;
  font-size: 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
  margin-bottom: 10px;
  &:hover {
    background: #49acee;
  }
`
const LoginForgotPass = styled.p`
  cursor: pointer;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`

const LoginForm = props => {
  return (
    <LoginFormWrapper onSubmit={props.logIn}>
      <LoginFormStack>
        <LoginImg src={instaImg} alt=""/>
        <LoginInput type="text" value={props.usernameInput} name='usernameInput' placeholder='Username' onChange={props.handleChange} />
        <LoginInput type="text" value={props.passwordInput} name='passwordInput' placeholder='Password' onChange={props.handleChange} />
        <LoginButton>Login</LoginButton>
        <LoginForgotPass className="forgot-pass">Forgot password?</LoginForgotPass>
      </LoginFormStack>
    </LoginFormWrapper>
  )
}

LoginForm.propTypes = {
  logIn: PropTypes.func,
  usernameInput: PropTypes.string,
  passwordInput: PropTypes.string,
  handleChange: PropTypes.func
}

export default LoginForm;
