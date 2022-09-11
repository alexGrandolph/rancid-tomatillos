import movieData from '../data/movieData.json';

function MovieCard() {
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
      <div>{renderMovieCards(movieData.movies)}</div>
    </div>
  ) 
}

export default MovieCard;