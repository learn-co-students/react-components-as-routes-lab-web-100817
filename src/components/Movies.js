import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return (
          <div>
            <p>Title: {movie.title}</p>
            <p>Metacritic Score: {movie.time}</p>

            <ul>
              Genres:
              {movie.genres.map(genre => {
                return <li>{genre}</li>;
              })}
            </ul>
          </div>
        );
      })}

      {/*{code here}*/}
    </div>
  );
};

export default Movies;
