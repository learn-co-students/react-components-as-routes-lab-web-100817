import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const list = directors.map(director => (
    <div key={director.name}>
      <h3>{director.name}</h3>
      <ul>
        {director.movies.map(movie => (<li key={movie}>{movie}</li>))}
      </ul>
    </div>
  ))
  return (
    <div>
      <h1>Directors Page</h1>
      {list}
    </div>
  );
}

export default Directors
