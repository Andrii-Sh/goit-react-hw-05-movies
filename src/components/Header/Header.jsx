import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.nav__wrapper}>
      <nav>
        <ul className={css.nav__list}>
          <li>
            <NavLink to="/" className={css.nav__link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.nav__link}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
