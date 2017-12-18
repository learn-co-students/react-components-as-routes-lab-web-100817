import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <div>
          <h3>{director.name}</h3>
          {director.movies.map(movie => (
            <ul>
              <li>{movie}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Directors
