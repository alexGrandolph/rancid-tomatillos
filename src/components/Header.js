import logo from '../assets/images/logo4.png'
import AnimatedLetters from './AnimatedLetters.js'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Header() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const titleArray = [
    'R',
    'a',
    'n',
    'c',
    'i',
    'd',
    ' ',
    'T',
    'o',
    'm',
    'a',
    't',
    'i',
    'l',
    'l',
    'o',
    's',
    ' ',
    '🍅'
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  return (
    <div className="animate__animated animate__bounceInLeft">
      <Link to='/dashboard'>
        <button className="back-button">Dashboard</button>
      </Link>
    <div className="header-container">
      <AnimatedLetters
        className="header-text"
        letterClass={letterClass}
        strArray={titleArray}
        idx={2}
      />
     
      <img className="header-logo" src={logo} alt="logo" />
      {/* <span className="header-text">Rotten Tomatillos</span> */}
    </div>
    </div>
  )
}

export default Header