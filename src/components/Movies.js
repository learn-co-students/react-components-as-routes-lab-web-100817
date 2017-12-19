import React from "react";
import { movies } from "../data";

let movieList = movies.map(movie => {
  return (
    <div>
      <p>Title: {movie.title}</p>
      <p>Run Time: {movie.time}</p>
      <ul>
        Genres:
        {movie.genres.map(genre => {
          return <li>{genre}</li>;
        })}
      </ul>
    </div>
  );
});

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
};

export default Movies;
