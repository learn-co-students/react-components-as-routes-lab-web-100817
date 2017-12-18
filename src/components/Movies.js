import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie => (
          <div>
            <h3>Name: {movie.title}</h3>
            <h5>Runtime: {movie.time}</h5>
            <h5>Genres:</h5>
            <ul>
              {movie.genres.map(genre => (
                <li>{genre}</li>
              ))}
            </ul>
          </div>
        ))}  
    </div>
  )
}

export default Movies;
