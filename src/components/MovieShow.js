import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'


function MovieShow(props) {

  const { id } = useParams()
  const [movieInfo, setMovieInfo] = useState({})
  useEffect(() => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovieInfo(data.movie))
  }, [])
  console.log(movieInfo)

  return (
    <h1>{movieInfo.title}</h1>
  )
}

export default MovieShow