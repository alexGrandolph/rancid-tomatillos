import { useState, useEffect } from 'react'

function Login() {
  const [currentUser, setCurrentUser] = useState({
    id: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  function handleChange(event) {
    console.log('test')
  }

  function handleSubmit(event) {
    console.log(currentUser)
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