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

  return (
    <div className="movie-component">
      <h1>{movieInfo.title}</h1>
      <img className="movie-backdrop" src={movieInfo.backdrop_path} alt="movie-backdrop" />
      <h2>Info:</h2>
      <ul>
        <li>{movieInfo.release_date}</li>
        <li>{movieInfo.average_rating}</li>
        <li>{movieInfo.genres}</li>
        <li>{movieInfo.runtime} Minutes</li>
      </ul>
      <h2>Summary</h2>
      <p>{movieInfo.overview}</p>
    </div>
  )
}

export default MovieShow