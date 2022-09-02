import BeatLoader from 'react-spinners/BeatLoader';
import s from './style.module.css';

export default function Loading() {
  return (
    <div className={s.loading}>
      <BeatLoader color="#216fca" size={18} />
    </div>
  );
}
