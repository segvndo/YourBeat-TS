import React from 'react'

const Login: React.FC<LoginProps> = () => {
  return (
    <div>
      <p>Login</p>

      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </form>
    </div>
  )
}

export default Login