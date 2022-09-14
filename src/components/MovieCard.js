import { Link } from 'react-router-dom'


function MovieCard(props) {

  return (
    <>
      <Link to={`/${props.id}`}>
        <img className="movie-image"  src={`${props.movie.poster_path}`} key="index" alt="movie-poster" />
      </Link>
    </>
  );
}

export default MovieCard;

