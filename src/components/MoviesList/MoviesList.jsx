import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const { movies_list, movies_link, movies_item } = css;

function MoviesList({ movies, children }) {
  const location = useLocation();

  return (
    <ul className={movies_list}>
      {movies.map(movie => {
        return (
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            key={movie.id}
            className={movies_link}
          >
            <li className={movies_item}>
              {children && children}
              {movie.title}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default MoviesList;
