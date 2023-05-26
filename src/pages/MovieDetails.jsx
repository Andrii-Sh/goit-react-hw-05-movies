import { Outlet, Link } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <div>
      <div>MovieDetails</div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
