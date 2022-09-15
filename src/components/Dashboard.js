import Login from './Login.js'
import SignUp from './SignUp.js'
import { useState } from 'react'

function Dashboard() {
  const [ userId, setUserId] = useState()

  function setToken(token) {
    localStorage.setItem('userId', token);
    setUserId(token)
  }
  
  if (!userId) {
    return (
      <>
      <Login setToken={setToken}/> 
      <SignUp setToken={setToken}/>
      </>
    )
  }
  return (
    <h1>Dashboard</h1>
  )
}

export default Dashboard