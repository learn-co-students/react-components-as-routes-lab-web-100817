import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsList = actors.map( (actor, i) => {
    return(
      <div key={i}>
        <h1>{actor.name}</h1>
        <ul>
          {actor.movies.map( (movies, i) => <li key={i}>{movies}</li> )}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
