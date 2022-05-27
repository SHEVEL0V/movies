import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import fetchUrl from '../../services/fetch';

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);

  const path = `/movie/${id}/reviews`;

  useEffect(() => {
    fetchUrl(path).then(({ results }) => setReviews(results));
  }, [path]);
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

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};
