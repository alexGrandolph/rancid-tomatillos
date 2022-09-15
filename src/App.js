// import { Route, Routes } from 'react-router-dom'
import './App.css';
import MovieCard from './components/MovieCard.js'
import Header from './components/Header.js'
import MovieShow from './components/MovieShow.js'
import Login from './components/Login.js'

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [allMovies, setAllMovies] = useState([])
  // const [currentMovie, setCurrentMovie] = useState("")

  useEffect(() => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
      .then(response => response.json())
      .then(data => setAllMovies(data.movies))
  }, [])

  const cards = allMovies.map(movie => {
    
    return (
      <>
        <div className="movie-container">
        <MovieCard
         
          key={movie.id}
          movie={movie}
          id={movie.id}
        />
      </div>
      </>
    )
  });

  return (


    <>
    <Routes>
        <Route exact path='/'  element={[<Header />, cards] } />
        <Route path='/movies' className="movies-list" element={cards} />
        <Route path='/:id' className="movie-show" element={<MovieShow id={'cheese'} />}  />
        <Route path='/login' className="login-page" element={<Login  />}  />


    </Routes>

     
    </>
  );



}

 

export default App;
