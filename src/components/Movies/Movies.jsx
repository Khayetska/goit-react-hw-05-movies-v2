import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'api/api';
import css from './Movies.module.css';
import MoviesList from 'components/MoviesList/MoviesList';

const { search_form, search_fild, search_btn, movies_list, movies_item } = css;

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const search = searchParams.get('query') ?? [];
    async function fetch() {
      const { results } = await getMovies(search);
      setMovies(results);
    }
    fetch();
  }, [searchParams]);

  const handleSubmit = evt => {
    evt.preventDefault();

    const { value } = evt.target.elements.search;
    setSearchParams({ query: value.trim() });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={search_form}>
        <input
          type="text"
          name="search"
          className={search_fild}
          autoComplete="off"
          placeholder="Search movies"
        />
        <button type="submit" className={search_btn}>
          Search
        </button>
      </form>
      <MoviesList movies={movies} />
    </>
  );
}

export default Movies;

/* <ul className={movies_list}>
        {movies.map(movie => {
          return (
            <Link
              to={`${movie.id}`}
              state={{ from: location }}
              key={movie.id}
              className={movies_item}
            >
              <li>{movie.original_title ?? movie.original_name}</li>
            </Link>
          );
        })}
      </ul> */
