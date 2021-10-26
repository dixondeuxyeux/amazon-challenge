import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/')
      })
      .catch((error) => alert(error.message))
  }

  const register = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        if (auth) {
          history.push('/')
        }
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src='DixonLogo4N.png' alt='dixonLogo' />
      </Link>

      <div className='login__container'>
        <h1>Sign-In</h1>

        <form>
          <h5>Email</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='submit'
            onClick={signIn}
            className='login__signInButton'
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to Dixon Deux Yeux Photographie&apos;s
          Conditions of Use Policy. Martin Dixon is the owner and author of all
          photographs. All rights reserved ©2021
        </p>
        <button
          type='submit'
          onClick={register}
          className='login__registerButton'
        >
          Create Your Own Dixon Deux Yeux Account
        </button>
      </div>
    </div>
  )
}

export default Login
