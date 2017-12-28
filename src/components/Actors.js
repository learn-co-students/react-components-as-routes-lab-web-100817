import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const list = actors.map(actor => (
    <div key={actor.name}>
      <h3>{actor.name}</h3>
      <ul>
        {actor.movies.map(movie => (<li key={movie}>{movie}</li>))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Actors Page</h1>
      {list}
    </div>
  );
};

export default Actors;
