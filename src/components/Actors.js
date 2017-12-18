import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let acts = actors.map(a =>
    <div key={a.name}>
      <h3>{a.name}</h3>
      <ul>
        {a.movies.map(m => <li>{m}</li>)}
      </ul>
    </div>
  )
  return (
    <div>
      <h1>"Actors Page"</h1>
      {acts}
    </div>
  );
};

export default Actors;
