import React from 'react'
import PropTypes from 'prop-types'
import instaImg from '../../imgs/instalogo.png'

const LoginForm = props => {
  return (
    <form className='login-form' onSubmit={props.logIn}>
      <div className='form-stack-cont'>
        <img src={instaImg} alt=""/>
        <input type="text" value={props.usernameInput} name='usernameInput' placeholder='Username' onChange={props.handleChange} />
        <input type="text" value={props.passwordInput} name='passwordInput' placeholder='Password' onChange={props.handleChange} />
        <button className="login-button">Login</button>
        <p className="forgot-pass">Forgot password?</p>
      </div>
    </form>
  )
}

LoginForm.propTypes = {

}

export default LoginForm
