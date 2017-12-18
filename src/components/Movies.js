import React from 'react';
import { movies } from '../data';



const Movies = () => {
  const movieList = movies.map( (movie, i) => {
    return(
      <div key={i} >
        <h1>{movie.title}</h1>
        <p>Run Time:{movie.time}</p>
        <p> Genres: </p>
        <ul>
          {movie.genres.map((genre, i) => <li key={i} >{genre}</li>)}
        </ul>
      </div>
    )
  }
  )
  return (
    <div>
      <h1>Movies Page</h1>
        {movieList}
    </div>
  );
};

export default Movies;
