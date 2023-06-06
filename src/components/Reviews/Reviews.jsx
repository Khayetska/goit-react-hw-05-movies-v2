import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api/api';
import css from './Reviews.module.css';

const { reviews_list, reviews_item, reviews_title } = css;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetch() {
      const { results } = await getReviews(movieId);
      setReviews(results);
    }
    fetch();
  }, [movieId]);
  return (
    <>
      <ul className={reviews_list}>
        {reviews.length === 0 ? (
          <p>We don't have any reviews for this movie.</p>
        ) : (
          reviews.map(el => {
            return (
              <li key={el.id} className={reviews_item}>
                <p className={reviews_title}>Author: {el.author}</p>
                <p>{el.content}</p>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
}

export default Reviews;
