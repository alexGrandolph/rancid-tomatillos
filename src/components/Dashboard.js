import Login from './Login.js'
import { useState } from 'react'

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }
// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   console.log(userToken)
//   return userToken?.token
// }

function Dashboard() {
  const [ userId, setUserId] = useState()
  // console.log(token)
  function setToken(token) {
    localStorage.setItem('userId', token);
    setUserId(token)
  }
  
  if (!userId) {
    return <Login setToken={setToken}/>
  }
  return (
    <h1>Dashboard</h1>
  )
}

export default Dashboard