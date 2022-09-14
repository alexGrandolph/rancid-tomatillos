import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react'


function MovieShow(props) {

  const { id } = useParams()

  const [movieInfo, setMovieInfo] = useState({})

  useEffect(() => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovieInfo(data.movie))
      // console.log('effect ran')
  }, [])

  const genres = movieInfo.genres?.join(' · ')
  const movieRating = movieInfo.average_rating?.toFixed(1)
  const movieYear = movieInfo.release_date?.split('-', 1) 
  return (
    <div className="movie-component">
      <div className="backdrop-container">
      <Link to='/'>
      <button className="back-button">Back</button>
      </Link>
        <img className="movie-backdrop" src={movieInfo.backdrop_path} alt="movie-backdrop" />
        <h1 className="movie-title">{movieInfo.title}</h1>
        <p className="movie-info-short">{`${genres} · ${movieYear}`}</p>
      </div>
      <div className="movie-text-container">
        <div className="movie-info-left">
          <h2>About <i>{movieInfo.title}</i></h2>
          
          <p>Release Date</p>
          <p className="movie-data">{movieYear}</p>
          
          <p>Average Rating</p>
          <p className="movie-data">{movieRating}</p>

          <p>Genres</p>
          <p className="movie-data">{genres}</p>

          <p>Runtime</p>
          <p className="movie-data">{movieInfo.runtime} Minutes</p>
        </div>
          <img className="movie-poster-small" src={movieInfo.poster_path} alt="movie-poster-small" />
        <div className="movie-info-right">
          <h2>Summary</h2>
          <p>{movieInfo.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieShow