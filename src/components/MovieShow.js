import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'


function MovieShow(props) {

  const { id } = useParams()
  const [movieInfo, setMovieInfo] = useState({})
  useEffect(() => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovieInfo(data.movie))
      console.log('effect ran')
  }, [])
  const genres = movieInfo.genres?.join(' · ')
  return (
    <div className="movie-component">
      <div className="backdrop-container">
        <img className="movie-backdrop" src={movieInfo.backdrop_path} alt="movie-backdrop" />
        <h1 className="movie-title">{movieInfo.title}</h1>
        <p className="movie-info-short">{`${genres} ${movieInfo.release_date}`}</p>
      </div>
      <div className="movie-text-container">
        <div className="movie-info-left">
          <h2>About <i>{movieInfo.title}</i></h2>
          <p>Release Date{movieInfo.release_date}</p>
          <p>{movieInfo.release_date}</p>
          <p>Average Rating</p>
          <p>{movieInfo.average_rating}</p>
          <p>Genres</p>
          <p>{genres}</p>
          <p>{movieInfo.runtime} Minutes</p>
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