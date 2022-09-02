import { Link } from 'react-router-dom';
import logo from '../../img/images.png';
import s from './style.module.css';

const Card = ({ film }) => {
  const imgPath = 'https://image.tmdb.org/t/p/w500/' + film.backdrop_path;

  return (
    <Link className={s.link} to={`movies/${film.id}`}>
      <img
        className={s.img}
        src={film.backdrop_path ? imgPath : logo}
        alt="baner"
      ></img>
      <div className={s.container}>
        <b>{film.title}</b>
        <p>rating: {film.vote_average}</p>
      </div>
    </Link>
  );
};

export default Card;
