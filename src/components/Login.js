import React, { useState } from 'react';



async function loginUser(credentials) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}
function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  function handleSubmit(event) {
    event.preventDefault()
    if (password === passwordConfirm) {
      console.log('api call')
    } else {
      console.log('error')
    }
  }
  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <div className="form-container">
        <form className="form">

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
            type="passwordConfirm"
            placeholder="Password Confirmation"
            className="form-input"
            name="passwordConfirm"
            onChange={e => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
          />

          <button
            className="form-submit"
            onSubmit={handleSubmit}
          >Login</button>
        </form>
      </div>
    </div>
  )

}
export default Login