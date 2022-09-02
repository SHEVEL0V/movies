import { fetchFilmTrendWeek } from '../../services/fetch';
import { useQuery } from '@tanstack/react-query';
import Card from '../../components/card';
import Loading from '../../components/loading/loading';

export default function HomePage() {
  const { data, isLoading } = useQuery(['fechTrend'], () =>
    fetchFilmTrendWeek()
  );

  const movies = data?.results || [];

  return (
    <ul>
      {isLoading && <Loading />}
      {movies.map(el => (
        <Card film={el} key={el.id} />
      ))}
    </ul>
  );
}
