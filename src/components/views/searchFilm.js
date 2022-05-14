import fetchURL from '../fetch/fetch';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import s from './stile.module.css';

export default function SerchFilm() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = `&language=en-US&query=${
    value || searchParams.get('search')
  }&page=1&include_adult=true`;
  const options = '/search/movie';

  useEffect(() => {
    if (value || searchParams.get('search')) {
      setSearchParams({ search: value });
      fetchURL(options, search).then(response => setList(response.results));
    }
  }, [search, searchParams, setSearchParams, value]);

  const onRender = e => {
    e.preventDefault();
    const { value } = e.target.input;
    setValue(value);
  };

  return (
    <div>
      <form onSubmit={onRender}>
        <input className={s.input} name="input"></input>
        <button className={s.button} type="sabmit">
          search
        </button>
      </form>
      <ul>
        {list.map(el => (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
