import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact activeStyle={{background: 'lightblue'}}>Home</NavLink>
      <NavLink to="/movies" exact activeStyle={{background: 'lightblue'}}>Movies</NavLink>
      <NavLink to="/actors" exact activeStyle={{background: 'lightblue'}}>Actors</NavLink>
      <NavLink to="/directors" exact activeStyle={{background: 'lightblue'}}>Directors</NavLink>
    </div>
  )
}
 
export default NavBar;
