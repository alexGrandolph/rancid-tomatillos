// import logo from '../assets/images/movie.p≈ng'
import logo from '../assets/images/logo5.png'
import AnimatedLetters from './AnimatedLetters.js'
import { useState, useEffect } from 'react'

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
    // ' ',
    // '🍅'
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  return (
    <div className="animate__animated animate__bounceInLeft">
    <div className="header-container">
      <img className="header-logo" src={logo} alt="logo" />

      <AnimatedLetters
        className="header-text"
        letterClass={letterClass}
        strArray={titleArray}
        idx={2}
      />
    </div>
    </div>
  )
}

export default Header