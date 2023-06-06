import { useEffect, useState } from 'react';
import { AiOutlineFire } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from 'api/api';
import css from './Home.module.css';

const { trending_list, trending_item, trending_icon, link } = css;

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const location = useLocation();

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
      <ul className={trending_list}>
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
      </ul>
    </>
  );
}

export default Home;
