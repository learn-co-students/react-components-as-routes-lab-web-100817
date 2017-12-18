import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return <div className={director.name}> {director.name}
          {director.movies.map(movie => {
            return <li> {movie} </li>
          })}
        </div>
      })
    }
    </div>
  );
}

export default Directors
