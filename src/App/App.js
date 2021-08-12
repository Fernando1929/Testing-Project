import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Pages/Home/home";
import Map from "../Pages/Map/map";
import About from "../Pages/About/aboutus";
import Factions from "../Pages/Factions/factions";
import Login from "../Pages/Login/login";
import Signup from "../Pages/Signup/signup";

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" render={() => <Home/>}/>
        <Route exact path = "/login" render={() => <Login/>}/>
        <Route exact path = "/signup" render={() => <Signup/>}/>
        <Route exact path = "/map" render={() => <Map/>}/>
        <Route exact path = "/aboutus" render ={() => <About/>}/>
        <Route exact path = "/factions" render ={() => <Factions/>}/>
      </Switch>
    </Router>
      
  );
}

export default App;
