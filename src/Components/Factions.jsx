
import React from "react";
import "../App/App.css";
import "../Pages/Home/home.css";
import "../Pages/Factions/factions.css";
import ReactDOM from 'react-dom';
import { Navbar, Nav, Button, Image, Dropdown } from "react-bootstrap";
import Map from "./Map";
import zombie from '../images/zombie.png';
import gdata1 from "../Pages/Factions/a.js";




function Factions(props) {

    return (
      <div className="App">
         <div class="slideshow-container">
      
        
                <div class="mySlides fade">
                  <div class="numbertext">1 / 3</div>
                 
                  <img src="zombie.png" style = {{ width: '10%' }}></img>

                  <div class="text">Caption Text</div>
                </div>
              
                <div class="mySlides fade">
                  <div class="numbertext">2 / 3</div>
                  <img src="zombie.png" style = {{ width: '10%' }}></img>
                  <div class="text">Caption Two</div>
                </div>
              
                <div class="mySlides fade">
                  <div class="numbertext">3 / 3</div>
                  <img src="zombie.png" style = {{ width: '10%' }}></img>
                  <div class="text">Caption Three</div>
                </div>
              
              
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
              </div>

              <br></br>
              
              <div style= {{textalign: 'center'}}>
              <span class="dot" onclick="currentSlide(1)"></span>
              <span class="dot" onclick="currentSlide(2)"></span>
              <span class="dot" onclick="currentSlide(3)"></span>
              </div>

</div>
    );
  }

export default Factions;