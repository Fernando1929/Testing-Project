import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "../Pages/Home/home";
import Map from "../Pages/Map/map";
import About from "../Pages/About/aboutus";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" render={() => <Home/>}/>
        <Route exact path = "/map" render={() => <Map/>}/>
        <Route exact path = "/aboutus" render ={() => <About/>}/>
      </Switch>
    </Router>
      
  );
}

export default App;
