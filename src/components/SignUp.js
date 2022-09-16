import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SignUp( { setToken }) {
  
  async function signUpUser(email, password, password_confirmation) {
    
    return fetch(`http://localhost:3000/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({email, password, password_confirmation})
    })
    .then(response => response.json())
    .then(response => setToken(response.data.id))
  }

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  async function handleSubmit(event) {
    event.preventDefault()
    const result = await signUpUser(email, password, passwordConfirm);
  }
  
  
  return (

    <div className="login-container">
      <h1  class="sign-up-header">Sign Up Here</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email Address"
            className="form-input"
            name="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            name="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <input
            type="password"
            placeholder="Password Confirmation"
            className="form-input"
            name="passwordConfirm"
            onChange={e => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
          />

          <button
            className="form-submit"
          // onSubmit={handleSubmit}
          >Login</button>
        </form>
      </div>
    </div>


  )
}
SignUp.propTypes = {
  setToken: PropTypes.func.isRequired
}
export default SignUp