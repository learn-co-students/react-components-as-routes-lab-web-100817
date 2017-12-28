import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const list = movies.map(movie => (
    <div key={movie.title}>
      <h3>{movie.title}</h3>
      <p>{movie.time}</p>
      <ul>
        {movie.genres.map(genre => (<li key={genre}>{genre}</li>))}
      </ul>
    </div>
  ))
  return (
    <div>
      <h1>Movies Page</h1>
      {list}
    </div>
  );
};

export default Movies;
