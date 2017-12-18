import React from "react";
import { directors } from "../data";

const Directors = () => {
  const divz = directors.map(director => (
    <div>
      <h3>{director.name}</h3>
      <ul>
        {director.movies.map(movie => (
          <li>{movie}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Directors Page</h1>
      {divz}
    </div>
  );
};

export default Directors;
