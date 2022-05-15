import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './stile.module.css';
import fetchUrl from '../fetch/fetch';

export default function Cast({ id, imgPath }) {
  const [cast, setCast] = useState();

  const path = `/movie/${id}/credits`;

  useEffect(() => {
    fetchUrl(path).then(({ cast }) => setCast(cast));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {cast &&
        cast.map(el => (
          <li key={el.id} className={s.cards}>
            {el.profile_path && (
              <img
                className={s.imgCast}
                src={imgPath + el.profile_path}
                alt="foto "
              ></img>
            )}
            <h3>{el.name}</h3>
          </li>
        ))}
    </ul>
  );
}

Cast.propTypes = {
  id: PropTypes.number.isRequired,
  imgPath: PropTypes.string.isRequired,
};
