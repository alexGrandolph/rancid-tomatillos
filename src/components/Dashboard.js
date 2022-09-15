import Login from './Login.js'
import { useState } from 'react'


function Dashboard() {
  const [ token, setToken] = useState('123')
  
  if (!token) {
    return <Login/>
  }
  return (
    <h1>Dashboard</h1>
  )
}

export default Dashboard