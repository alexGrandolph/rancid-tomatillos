// import { Route, Routes } from 'react-router-dom'
import './App.css';
import MovieCard from './components/MovieCard.js'
import Header from './components/Header.js'
import { useState, useEffect } from 'react'

function App() {
  const [allMovies, setAllMovies] = useState([])

  useEffect(() => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
      .then(response => response.json())
      .then(data => setAllMovies(data.movies))
  })

  const cards = allMovies.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        movie={movie}
      />
    )
  })
  return (
    <div className="app">
    <Header />
      <section className="movies">  
        {cards}
      </section>
    </div>
  );
}

export default App;
