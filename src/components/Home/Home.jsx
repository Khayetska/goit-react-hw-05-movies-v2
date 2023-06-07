import { useEffect, useState } from 'react';
import { AiOutlineFire } from 'react-icons/ai';
import { getTrending } from 'api/api';
import MoviesList from 'components/MoviesList/MoviesList';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetch() {
      const { results } = await getTrending();

      const filteredResults = results.map(({ title, id }) => {
        return { title, id };
      });
      setTrendingMovies(filteredResults);
    }
    fetch();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovies}>
        <AiOutlineFire fill="#f00" size={23} />
      </MoviesList>
    </>
  );
}

export default Home;

/* <ul className={trending_list}>
        {trendingMovies.map(movie => (
          <li key={movie.id} className={trending_item}>
            <AiOutlineFire fill="#f00" size={23} className={trending_icon} />
            <Link
              to={`movies/${movie.id}`}
              state={{ from: location }}
              className={link}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul> */
