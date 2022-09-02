import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import s from './style.module.css';

export default function Header() {
  return (
    <nav className={s.nav}>
      <NavLink
        className={s.buuton}
        style={({ isActive }) =>
          isActive ? { backgroundColor: 'rgba(248, 33, 33, 0.155)' } : {}
        }
        to="/"
      >
        <Button variant="outlined">Home</Button>
      </NavLink>

      <NavLink
        className={s.buuton}
        style={({ isActive }) =>
          isActive ? { backgroundColor: 'rgba(248, 33, 33, 0.155)' } : {}
        }
        to="movies"
      >
        <Button variant="outlined">Movies</Button>
      </NavLink>
    </nav>
  );
}
