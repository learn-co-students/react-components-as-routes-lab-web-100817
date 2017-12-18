import React from "react";
import { actors } from "../data";

const Actors = () => {
  const actor = actors.map(actor => {
    const movies = actor.movies.map(movie => {
      return <li key={movie}>{movie}</li>;
    });
    return (
      <div key={actor.name}>
        <h3>Name: {actor.name}</h3>
        <p>Movies:</p> <ul>{movies}</ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {actor}
    </div>
  );
};

export default Actors;
