import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Pages/Home/home";
import Map from "../Pages/Map/map";
import About from "../Pages/About/aboutus";
import Factions from "../Pages/Factions/factions";
import Login from "../Pages/Login/login";
import Signup from "../Pages/Signup/signup";
import Navbar from "../Components/Navbar";
import LoggedNavbar from "../Components/LoggedNavbar";
import Footer from "../Components/Footer";
import Profile from "../Pages/Profile/profile";
import './App.css';
import Resources from "../Pages/Resources/resources";
import Neighbors from "../Pages/Neighbors/neightbors";

function App() {
const auth = () => {
  return false;
}

  return (
    <Router>
       {auth() ? <LoggedNavbar/> : <Navbar/>}
      <Switch>
        <Route exact path = "/" render={() => <Home/>}/>
        <Route exact path = "/resources" render={() => <Resources/>}/>
        <Route exact path = "/neighbors" render={() => <Neighbors/>}/>
        <Route exact path = "/aboutus" render ={() => <About/>}/>
        <Route exact path = "/factions" render ={() => <Factions/>}/>
        {/* <Route exact path = "/profile" render={() => <Profile/>}/> */}
      </Switch>
      <Footer/>
    </Router>
      
  );
}

export default App;
