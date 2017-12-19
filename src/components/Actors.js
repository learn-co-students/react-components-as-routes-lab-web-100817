import React from "react";
import { actors } from "../data";

const actorList = actors.map(actor => {
  return (
    <div>
      <p>Name: {actor.name}</p>
      <ul>
        Movies:
        {actor.movies.map(movie => {
          return <li>{movie}</li>;
        })}
      </ul>
    </div>
  );
});

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
};

export default Actors;
