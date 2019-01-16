import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = props => {
  return (
    <form className='login-form'>
      <input type="text" value={props.usernameInput} name='usernameInput' placeholder='Username' onChange={props.handleChange} />
      <input type="text" value={props.passwordInput} name='passwordInput' placeholder='Password' onChange={props.handleChange} />
    </form>
  )
}

LoginForm.propTypes = {

}

export default LoginForm
