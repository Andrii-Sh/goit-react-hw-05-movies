import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovies } from '../api/themoviedbApi';

const Movies = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {}, []);

  // function handleSubmitForm(evt) {
  //   evt.preventDefault();
  //   setQuery(evt.target.value);

  // }

  function handleChangeInput(evt) {
    setQuery(evt.target.value);
  }

  return (
    <div>
      <form>
        <input type="text" value={query} onChange={handleChangeInput} />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Movies;
