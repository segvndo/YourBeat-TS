import React from 'react'

const Login = () => {
  return (
    <div>
      <p>Login</p>

      <div>
        <p>Username</p>
        <input type="text" name="username" />
      </div>
      <div>
        <p>Password</p>
        <input type="password" name="password" />
      </div>
    </div>
  )
}

export default Login