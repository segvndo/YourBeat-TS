'use client';
import React from 'react';
import Link from 'next/link';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="auth-form-container">
      <h2 >Login</h2>
      <div className="login-form">
        <label htmlFor="username">Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" id="username" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*******" id="password" name="password" />
        <button onClick={handleSubmit}>Login</button>
      </div>
      &nbsp;
      <Link href="/register" >Don't have an account? Sign Up</Link>
    </div>
  )
}

export default Login