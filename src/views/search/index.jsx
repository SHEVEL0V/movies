import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import BeatLoader from 'react-spinners/BeatLoader';
import { fetchFilmQery } from '../../services/fetch';
import Button from '@mui/material/Button';
import Card from '../../components/card';
import s from './style.module.css';

export default function SerchFilm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search');

  const { data, isLoading } = useQuery(
    ['fechQery', query],
    () => fetchFilmQery(query),
    { enabled: !!query }
  );

  const films = data?.results || [];

  const onRender = e => {
    e.preventDefault();
    const { value } = e.target.input;
    setSearchParams({ search: value });
  };

  return (
    <div>
      <form onSubmit={onRender}>
        <input className={s.input} name="input"></input>
        <Button variant="contained" type="sabmit">
          search
        </Button>
      </form>
      {isLoading && query && <BeatLoader color="#216fca" size={12} />}
      <ul>
        {films.map(el => (
          <Card key={el.id} film={el} />
        ))}
      </ul>
    </div>
  );
}
