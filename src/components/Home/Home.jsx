import { useEffect, useState } from 'react';
import { AiOutlineFire } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from 'api/api';
import css from './Home.module.css';

const { trending_list, trending_item, link } = css;

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const location = useLocation();
  // console.log('home', location);

  useEffect(() => {
    async function fetch() {
      const { results } = await getTrending();
      setTrendingMovies(results);
    }
    fetch();
  }, []);

  return (
    <>
      <h1>The most popular movies</h1>
      <ul className={trending_list}>
        {trendingMovies.map(movie => (
          <li key={movie.id} className={trending_item}>
            <AiOutlineFire fill="#f00" size={23} />
            <Link to={`movies/${movie.id}`} state={location} className={link}>
              {movie.original_title ?? movie.original_name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
