import PropagateLoader from 'react-spinners/PropagateLoader';
import s from './loading.module.css';

export default function Loading() {
  return (
    <div className={s.loading}>
      <PropagateLoader color={'#1885D4'} size={40} />
    </div>
  );
}
