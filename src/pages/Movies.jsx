import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../api/themoviedbApi';

const Movies = () => {
  // const [query, setQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchMovie() {
      try {
        const data = await searchMovies(query);
        // console.log(data);
        setSearchedMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, [query]);

  function handleSubmitForm(evt) {
    evt.preventDefault();
    setSearchParams({ query: evt.target.elements.inputText.value });
    evt.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type="text" name="inputText" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchedMovies.length > 0 &&
          searchedMovies.map(item => (
            <li key={item.id}>
              <Link to={`${item.id}`} state={{ from: location }}>
                {item.title}
              </Link>
            </li>
          ))}
        {/* {searchedMovies.length === 0 && query !== '' && (
          <p>Sorry, there are no mathes with "{query}"</p>
        )} */}
      </ul>
    </div>
  );
};

export default Movies;
// value = { query };

// onChange = { handleChangeInput };
