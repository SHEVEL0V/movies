import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import s from './style.module.css';

import { fetchFilmReviews } from '../../services/fetch';

export default function Reviews({ id }) {
  const { data } = useQuery(['fechTrend'], () => fetchFilmReviews(id));

  const reviews = data?.results || [];

  return (
    <ul className={s.container}>
      {reviews.length > 0 ? (
        reviews.map(el => (
          <li key={el.id}>
            <h3>{el.author}</h3>
            <p>{el.content}</p>
          </li>
        ))
      ) : (
        <h3 className={s.title}>We don't haveany reviews for this movie.</h3>
      )}
    </ul>
  );
}

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};
