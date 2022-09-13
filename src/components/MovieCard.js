// import movieData from '../data/movieData.json';
import { useState, useEffect } from 'react'

function MovieCard(props) {
console.log(props.movie)
    return (
      <div className="movies-list">
        <div className="movie-container">
          <img className="movie-image" src={`${props.movie.poster_path}`} key="index" alt="movie-poster" />

        </div>
      </div>
    );
}

export default MovieCard;