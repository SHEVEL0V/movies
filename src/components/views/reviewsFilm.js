import { useState, useEffect } from 'react';
import fetchUrl from '../fetch/fetch';

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);

  const path = `/movie/${id}/reviews`;

  useEffect(() => {
    fetchUrl(path).then(({ results }) => setReviews(results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(el => (
          <li key={el.id}>
            <h3>{el.author}</h3>
            <p>{el.content}</p>
          </li>
        ))
      ) : (
        <h3>We don't haveany reviews for this movie.</h3>
      )}
    </ul>
  );
}
