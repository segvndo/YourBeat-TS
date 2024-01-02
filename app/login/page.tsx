import React from 'react'

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  return (
    <div>
      <h1>Login</h1>

      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <button type="submit" className="rounded-lg">Submit</button>
      </form>
    </div>
  )
}

export default Login