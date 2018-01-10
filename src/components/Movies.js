import React from "react";
import { movies } from "../data";

const Movies = () => {
  const movieList = movies.map((movie, index) => {
    return (
      <div key={index}>
        <h1>{movie.title}</h1>
        <h3>Time:{movie.time}</h3>
        <h3>
          Genres
          <ul>
            {movie.genres.map((genre, index) => {
              return <li key={index}>{genre}</li>;
            })}
          </ul>
        </h3>
        <h4>metascore:{movie.metascore}</h4>
      </div>
    );
  });
  return (
    <div>
      <h1>Movies Page</h1>
      <ul>{movieList}</ul>
    </div>
  );
};

export default Movies;
