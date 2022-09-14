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
        <p>{`${genres} ${movieInfo.release_date}`}</p>
      </div>
      <h2>Info:</h2>
      <ul>
        <li>{movieInfo.release_date}</li>
        <li>{movieInfo.average_rating}</li>
        <p>{genres}</p>
        <li>{movieInfo.runtime} Minutes</li>
      </ul>
      <h2>Summary</h2>
      <p>{movieInfo.overview}</p>
    </div>
  )
}

export default MovieShow