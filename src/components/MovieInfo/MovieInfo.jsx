import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { VscPreview } from 'react-icons/vsc';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { getDetails } from 'api/api';
import css from './MovieInfo.module.css';
import poster from '../../images/no-image.png';

const {
  backBtn,
  wrapper,
  movie_poster,
  info_wrapper,
  movie_title,
  movie_title_accent,
  field_title,
  additional_info,
  addInfo_title,
  addInfo_list,
  addInfo_item,
} = css;

function MovieInfo() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function fetch() {
      const data = await getDetails(movieId);
      setMovie(data);
    }
    fetch();
  }, [movieId]);

  if (!movie) return;

  const {
    title,
    release_date,
    overview,
    vote_average,
    production_countries,
    genres,
    poster_path,
    id,
  } = movie;

  return (
    <>
      <Link className={backBtn} to={backLinkLocation.current}>
        Go back
      </Link>
      <div className={wrapper} key={id}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : poster
          }
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
          <p>
            <b>Country: </b>
            {production_countries?.length > 0
              ? production_countries.map(el => el.name).join(', ')
              : 'There is no info'}
          </p>
          <p>
            <b>Genres: </b>{' '}
            {genres?.length > 0
              ? genres.map(genre => genre.name).join(', ')
              : 'There is no info'}
          </p>
          <h3 className={field_title}>Overview:</h3>
          <p>
            {overview
              ? overview
              : 'Sorry, there is no information about this movie'}
          </p>
        </div>
      </div>
      <div className={additional_info}>
        <h4 className={addInfo_title}>Additional information</h4>
        <ul className={addInfo_list}>
          <Link to="cast" className={addInfo_item}>
            <BsPersonBoundingBox />
            Cast
          </Link>
          <Link to="reviews" className={addInfo_item}>
            <VscPreview />
            Reviews
          </Link>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieInfo;
