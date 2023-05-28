import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../api/themoviedbApi';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);

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

  // function handleSubmitForm(evt) {
  //   evt.preventDefault();
  //   setQuery(evt.target.value);

  // }

  // function handleChangeInput(evt) {
  //   setQuery(evt.target.value);
  // }

  function handleSubmitForm(evt) {
    evt.preventDefault();
    setQuery(evt.target.elements.inputText.value);
    evt.target.reset();
    // setQuery('');
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type="text" name="inputText" />
        <button type="submit"></button>
      </form>
      <ul>
        {searchedMovies &&
          searchedMovies.map(item => (
            <li key={item.id}>
              <Link to={`${item.id}`}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
// value = { query };

// onChange = { handleChangeInput };
