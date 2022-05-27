import fetchUrl from '../services/fetch';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const path = '/trending/movie/week';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchUrl(path).then(response => {
      const { results } = response;
      setMovies(results);
    });
  }, []);

  return (
    <ul>
      {movies.map(el => (
        <li key={el.id}>
          <Link to={`movies/${el.id}`}>{el.title}</Link>
        </li>
      ))}
    </ul>
  );
}
