import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function MoviesList({ movies, children }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => {
        return (
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            key={movie.id}
          >
            <li>
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
