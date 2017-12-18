import React from 'react';
import { movies } from '../data';

const Movies = () => {
      let mvs = movies.map(m =>
        <div key={m.title}>
          <h3>{m.title}</h3>
          <h4>{m.time}</h4>
          <ul>
            {m.genres.map(g => <li>{g}</li>)}
          </ul>
        </div>
      )
      return (
        <div>
          <h1>"Movies Page"</h1>
          {mvs}
        </div>
      );

};

export default Movies;
