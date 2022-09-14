// import logo from '../assets/images/movie.png'
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
    ' ',
    '🍅'
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 9000)
  }, [])

  return (
    <div className="header-container">
      <AnimatedLetters
        className="header-text"
        letterClass={letterClass}
        strArray={titleArray}
        idx={2}
      />
      {/* <img className="header-logo" src={logo} alt="logo" /> */}
      {/* <span className="header-text">Rotten Tomatillos</span> */}
    </div>
  )
}

export default Header