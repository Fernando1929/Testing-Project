
import React from "react";
import "../App/App.css";
import "../Pages/Home/home.css";
import { Nav, Button, Image, Dropdown } from "react-bootstrap";


function Navbar(props) {
    return (
    <body>
    <div>
    <title>W3.CSS Template</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
     <style
        dangerouslySetInnerHTML={{
        __html:
            '\nbody {font-family: "Lato", sans-serif}\n.mySlides {display: none}\n'
        }} />
    </div> 
    <div className="w3-top">
   
    <div className="w3-bar w3-black w3-card">
      <a
        className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
        href="javascript:void(0)"
        onclick="myFunction()"
        title="Toggle Navigation Menu"
      >
        <i className="fa fa-bars" />
      </a>
      
      <a href="/" className="w3-bar-item w3-button w3-padding-large">
        HOME
      </a>
      <a
        href="/factions"
        className="w3-bar-item w3-button w3-padding-large w3-hide-small"
      >
        FACTIONS
      </a>
      <a
        href="/aboutus"
        className="w3-bar-item w3-button w3-padding-large w3-hide-small"
      >
          VACCINE
      </a>
      <a
        href="/aboutus"
        className="w3-bar-item w3-button w3-padding-large w3-hide-small"
      >
        ABOUT
      </a>
      <a href="/login" className="w3-bar-item w3-button w3-padding-large w3-hover-blue w3-right">Login</a>
    <a href="/signup" className="w3-bar-item w3-button w3-padding-large w3-hover-blue w3-right">Sign Up</a>
    </div>
    </div>
    {/* Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links) */}
  <div
    id="navDemo"
    className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top"
    style={{ marginTop: 46 }}
  >
    <a
      href="#band"
      className="w3-bar-item w3-button w3-padding-large"
      onclick="myFunction()"
    >
      BAND
    </a>
    <a
      href="#tour"
      className="w3-bar-item w3-button w3-padding-large"
      onclick="myFunction()"
    >
      TOUR
    </a>
    <a
      href="#contact"
      className="w3-bar-item w3-button w3-padding-large"
      onclick="myFunction()"
    >
      ABOUT
    </a>
    <a
      href="#"
      className="w3-bar-item w3-button w3-padding-large"
      onclick="myFunction()"
    >
      MERCH
    </a>
  </div>
        </body>
    );
}
export default Navbar;