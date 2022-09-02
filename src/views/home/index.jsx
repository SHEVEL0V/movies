import { fetchFilmTrendWeek } from '../../services/fetch';
import { useQuery } from '@tanstack/react-query';
import BeatLoader from 'react-spinners/BeatLoader';
import Card from '../../components/card';

export default function HomePage() {
  const { data, isLoading } = useQuery(['fechTrend'], () =>
    fetchFilmTrendWeek()
  );

  const movies = data?.results || [];

  return (
    <ul>
      {isLoading && <BeatLoader color="#216fca" size={18} />}
      {movies.map(el => (
        <Card film={el} />
      ))}
    </ul>
  );
}
