import { useState, useEffect } from 'react';
import { getCast } from 'api/api';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import poster from '../../images/no-image.png';

const { cast_list, cast_item, cast_img } = css;

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetch() {
      const { cast } = await getCast(movieId);
      setCast(cast);
    }
    fetch();
  }, [movieId]);

  return (
    <div>
      <ul className={cast_list}>
        {cast.length === 0 ? (
          <p>There is no info about cast</p>
        ) : (
          cast.map(el => {
            return (
              <li key={el.id} className={cast_item}>
                <img
                  src={
                    el.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                      : poster
                  }
                  alt={el.name}
                  className={cast_img}
                />
                <p>
                  <b>{el.name}</b>
                </p>
                <p>Character: {el.character}</p>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Cast;
