import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsList = directors.map( (director, i) => {
    return(
      <div key={i}>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map( (movies, i) => <li key={i}>{movies}</li> )}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors
