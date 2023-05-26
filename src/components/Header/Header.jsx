import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </div>
  );
};

export default Header;
