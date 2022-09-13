// import movieData from '../data/movieData.json';
import { useState, useEffect } from 'react'

function MovieCard() {
  const [allMovies, setAllMovies] = useState([])

  useEffect(() => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
    .then(response => response.json())
    .then(data => setAllMovies(data.movies))
  })

  console.log(allMovies)

  const renderMovieCards = (movies) => {
    return (
      <div className="movies-list">
        {
          movies.map((movie, index) => {
            return (
              <div className="movie-container">
                <img className="movie-image" src={`${movie.poster_path}`} alt="movie-poster" />
                
              </div>
            )
          })
        }

      </div>
    );
  }
  return (
    <div>
      <div>{renderMovieCards(allMovies)}</div>
    </div>
  ) 
}

export default MovieCard;