import movieData from '../data/movieData.json';

function MovieCard() {
  const renderMovieCards = (movies) => {
    return (
      <div className="movies-container">
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
  // const renderMovieCards = (movies) => {
  //   movies.map((movie, index) => {
  //     <div className="movies-container"
  //       return (
  //         <div className="movie-card-container"key={index}>
  //           <img className="movie-poster" src={movie.poster_path} alt="movie-poster" />
  //         </div>
      
  //   })
  //   )
  // }

  // return (
  //   <>
  //     {renderMovieCards(movieData.movies)}
  //   </>
  
  // )

export default MovieCard;