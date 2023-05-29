import React, { useState, useEffect } from 'react';
import { getTrandingMovies } from '../../api/themoviedbApi';
import { Link } from 'react-router-dom';

const Home = () => {
  const [tradingMovies, setTradingMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getTrandingMovies();
        setTradingMovies(() => data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Trading today</h2>
      <ul>
        {tradingMovies.map(item => (
          <li key={item.id}>
            <Link to={`movies/${item.id}`}>
              {item.original_name ? item.original_name : item.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
