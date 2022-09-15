import { useState, useEffect } from 'react'

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
  const [currentUser, setCurrentUser] = useState({
    id: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  function handleChange(event) {
    const { name, value } = event.target
    setCurrentUser(prevCurrentUser => ({
      ...prevCurrentUser,
      [name]: value
    }))
  }

  function handleSubmit(event) {
   event.preventDefault()
   if (currentUser.password === currentUser.passwordConfirm) {
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
            onChange={handleChange}
            value={currentUser.email}
          />
          <input 
            type="password"
            placeholder="Password"
            className="form-input"
            name="password"
            onChange={handleChange}
            value={currentUser.password}
          />
          <input 
            type="passwordConfirm"
            placeholder="Password Confirmation"
            className="form-input"
            name="passwordConfirm"
            onChange={handleChange}
            value={currentUser.passwordConfirm}
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