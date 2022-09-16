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
  console.log(localStorage.getItem('userId'))
  
  function checkForUserId() {
    if (localStorage.getItem('userId') === undefined && null) {
      return false
    } else {
      return true 
    }
  }
  
  console.log(checkForUserId())

  if (checkForUserId() === false) {
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