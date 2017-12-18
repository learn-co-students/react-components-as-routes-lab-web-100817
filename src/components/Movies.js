import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const m = movies.map(movie => (
    <div>
      <h3>{movie.title}</h3>
      <h4>{movie.time}</h4>
      <ul>
        {movie.genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Movies Page</h1>
      {m}
    </div>
  );
};

export default Movies;
