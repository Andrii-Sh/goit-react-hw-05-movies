import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import MovieDetails from '../../pages/MovieDetails';
import Movies from '../../pages/Movies';
import Layout from '../Layout/Layout';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
