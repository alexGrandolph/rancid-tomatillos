// import movieData from '../data/movieData.json';
import { useState, useEffect } from 'react'

function MovieCard(props) {
  return (
      <img className="movie-image" src={`${props.movie.poster_path}`} key="index" alt="movie-poster" />
  );
}

export default MovieCard;



// {
//   return (
//     <main className='App'>
//       <Header />
//       <Route
//         exact path='/'
//         render={() => {
//           return (
//             <>
//               <div className="movies-list">
//                 {cards}
//               </div>
//             </>
//           )
//         }}
//       />
//       <Route
//         exact path='/:id'
//         render={({ match }) => {
//           return (
//             <MovieShow
//             // movie={this.state.selectedMovie}
//             // showAllMovies={this.showAllMovies}
//             // id={match.params.id} />
//             />
//           )
//         }}
//       />

//     </main>
//   )
// }
//   }
