// import movieData from '../data/movieData.json';
import { useState, useEffect } from 'react'

function MovieCard(props) {
console.log(props.movie)
  return (
      <img className="movie-image" src={`${props.movie.poster_path}`} key="index" alt="movie-poster" />
  );
}

export default MovieCard;