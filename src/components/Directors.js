import React from "react";
import { directors } from "../data";

let directorList = directors.map(director => {
  return (
    <div>
      <p>Name: {director.name}</p>
      <ul>
        Movies:
        {director.movies.map(movie => {
          return <li>{movie}</li>;
        })}
      </ul>
    </div>
  );
});
const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
};

export default Directors;
