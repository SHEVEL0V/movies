import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Section from '../../components/section';
import Loading from '../../components/loading';
import { fetchFilmById } from '../../services/fetch';
import Button from '@mui/material/Button';
import logo from '../../img/images.png';
import s from './style.module.css';

export default function CardDetals() {
  const { movieId } = useParams();
  const imgPath = 'https://image.tmdb.org/t/p/w500/';

  const navigate = useNavigate();

  const { data = {}, isLoading } = useQuery(['fechTrend'], () =>
    fetchFilmById(movieId)
  );

  console.log(data);
  const { poster_path, title, vote_average, overview, genres } = data;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Button variant="contained" onClick={() => navigate(-1)}>
            <FiArrowLeft />
            Go back
          </Button>
          <Section>
            <div className={s.card}>
              <img
                className={s.img}
                src={poster_path ? imgPath + poster_path : logo}
                alt="baner "
              ></img>
              <div>
                <h2>{title}</h2>
                <p>Users score: {vote_average}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>
                  {genres &&
                    genres.map(el => <span key={el.id}>{el.name} </span>)}
                </p>
              </div>
            </div>
          </Section>
        </div>
      )}
    </>
  );
}
