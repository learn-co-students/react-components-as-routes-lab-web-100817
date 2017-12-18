import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let dcts = directors.map(d =>
    <div key={d.name}>
      <h3>{d.name}</h3>
      <ul>
        {d.movies.map(m => <li>{m}</li>)}
      </ul>
    </div>
  )
  return (
    <div>
      <h1>"Directors Page"</h1>
      {dcts}
    </div>
  );
}

export default Directors
