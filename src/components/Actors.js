import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return <div className={actor.name}> {actor.name}
          {actor.movies.map(movie => {
            return <li> {movie} </li>
          })}
        </div>
      })
    }
    </div>
  );
};

export default Actors;
