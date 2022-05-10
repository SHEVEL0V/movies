import { NavLink } from "react-router-dom";
import s from "./header.module.css";

export default function Header() {
  return (
    <nav className={s.nav}>
      <NavLink
        className={({ isActive }) => s.link + (isActive ? s.active : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          "nav-link" + (isActive ? " activated" : "")
        }
        to="/movies/"
      >
        Movies
      </NavLink>
    </nav>
  );
}
