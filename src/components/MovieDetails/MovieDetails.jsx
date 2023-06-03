import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getDetails } from 'api/api';
// import { Link } from 'react-router-dom';
import css from './MovieDetails.module.css';

const {
  wrapper,
  movie_poster,
  info_wrapper,
  movie_title,
  movie_title_accent,
  field_title,
} = css;

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  // const location = useLocation();
  // console.log('details', location);

  useEffect(() => {
    async function fetch() {
      const data = await getDetails(movieId);
      setMovie(data);
      // console.log(movie);
    }
    fetch();
  }, [movieId]);

  const {
    original_title,
    original_name,
    release_date,
    overview,
    vote_average,
    genres,
    poster_path,
    id,
  } = movie;

  const title = original_title ?? original_name;

  return (
    <div className={wrapper} key={id}>
      {/* <Link to={'/'}>Go back</Link> */}
      <img
        src={poster_path && `https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`${title} movie poster`}
        className={movie_poster}
      />
      <div className={info_wrapper}>
        <h2 className={movie_title}>
          <span className={movie_title_accent}> {title} </span>(
          {release_date && `${release_date.slice(0, 4)}`})
        </h2>
        <p>
          <b>User score:</b> {Math.round(vote_average * 10)}%
        </p>
        <h3 className={field_title}>Overview</h3>
        <p>
          {overview
            ? overview
            : 'Sorry, there is no information about this movie'}
        </p>
        <h3 className={field_title}>Genres:</h3>
        <ul>
          {genres &&
            genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default MovieDetails;
