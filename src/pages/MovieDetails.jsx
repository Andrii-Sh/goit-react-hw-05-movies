import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../api/themoviedbApi';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();

  const { movieId } = useParams();
  const backLinkLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkLocation.current}>
        <button type="button">Go back</button>
      </Link>
      <div>
        <img
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
              : ''
          }
          alt="movie poster"
          width={200}
          height={300}
        />
        <div>
          <h2>{movieDetails.title}</h2>
          <p>
            User score: {Math.round((movieDetails.vote_average / 10) * 100)}%
          </p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <ul>
            {!movieDetails.genres
              ? ''
              : movieDetails.genres.map(item => (
                  <li key={item.id}>{item.name}</li>
                ))}
          </ul>
        </div>
      </div>
      <ul>
        Additional information
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
