import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialCredentials = {
  username: '',
  password: ''
}

const Login = () => {
  const [credentials, setCredentials] = useState(initialCredentials)
  const history = useHistory()

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        history.push('/friends')
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
        <label>
          Username
          <input
            type='text'
            name='username'
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type='text'
            name='password'
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <button>Log In</button>
      </form>
    </div>
  )
}

export default Login;
