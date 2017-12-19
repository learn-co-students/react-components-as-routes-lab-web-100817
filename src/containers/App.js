import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Actors from "../components/Actors";
import Directors from "../components/Directors";
import Movies from "../components/Movies";

const App = props => {
  return (
    <div>
      <Router>
        <NavBar />
      </Router>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
      <Router>
        <Route exact path="/movies" component={Movies} />
      </Router>
      <Router>
        <Route exact path="/directors" component={Directors} />
      </Router>
      <Router>
        <Route exact path="/actors" component={Actors} />
      </Router>
    </div>
  );
};

export default App;
