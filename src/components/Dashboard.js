import Login from './Login.js'
import SignUp from './SignUp.js'
import { useState } from 'react'

function Dashboard() {
  const [ userId, setUserId] = useState()

  function setToken(token) {
    localStorage.setItem('userId', token);
    setUserId(token)
  }
  // let validUser = false
  // console.log(localStorage.getItem('userId'))
  

  

  if (!userId) {
    return (
      <>
      <Login setToken={setToken}/> 
      <SignUp setToken={setToken}/>
      </>
    )
  }
  return (
  <div className="dashboard-container">  
    <h1>Dashboard</h1>
  </div>
  )
}

export default Dashboard