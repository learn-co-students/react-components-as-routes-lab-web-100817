import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const link = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white"
  };
  const activeLink = {
    background: "darkblue"
  };
  return (
    <div className="navbar">
      <NavLink to="/" exact style={link} activeStyle={activeLink}>
        Home
      </NavLink>
      <NavLink to="/movies" exact style={link} activeStyle={activeLink}>
        Movies
      </NavLink>
      <NavLink to="/actors" exact style={link} activeStyle={activeLink}>
        Actors
      </NavLink>
      <NavLink to="/directors" exact style={link} activeStyle={activeLink}>
        Directors
      </NavLink>
    </div>
  );
};

export default NavBar;
