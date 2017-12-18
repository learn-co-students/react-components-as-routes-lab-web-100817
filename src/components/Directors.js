import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorDivs = directors.map(director => {
    return (<div>
      <h4>{director.name}</h4>
      <ul>
        {director.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorDivs}
    </div>
  );
}

export default Directors
