import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'api/api';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';

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
      <SearchForm onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
}

export default Movies;

/* <form onSubmit={handleSubmit} className={search_form}>
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
      </form> */

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
