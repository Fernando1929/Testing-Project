
import React from "react";
import createClass from 'create-react-class';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import "../App/App.css";
import "../Pages/Home/home.css";
import "../Pages/Factions/factions.css";
import { Nav, Button, Image, Dropdown } from "react-bootstrap";
import Navbar from "./Navbar";
import Map from "./Map";
import zombie from '../images/zombie.png';
import Footer from "./Footer";


function Home1(props) {

  return(
<div className="App">
    
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nbody {font-family: "Lato", sans-serif}\n.mySlides {display: none}\n'
    }}
  />
  <Navbar/>
  {/* Page content */}
  <div className="w3-black w3-content" style={{ maxWidth: 2000, marginTop: 8 }}>


 


    {/* The Band Section */}
    <div
      className="w3-container w3-content w3-center w3-padding-64"
      style={{ maxWidth: 800 }}
      id="band"
    >
      <h2 className="w3-wide">Amazon Prime Z</h2>
      <p className="w3-opacity">
        <i>Amazon today, amazon tomorrow, amazon forever</i>
      </p>

      <img
        src="amazonhq.jpg"
        alt="Me"
        className="w3-image"
        style={{ display: "block", margin: "auto" }}
        width={900}
        height={533}
      />

      <p className="w3-justify w3-padding-64">

      In the year 2069 an infected BigMac help spread a new virus throughout the world. 
      The newly discovered Z virus turned people into zombies that ravaged the world. 
      No one knows where the virus came from or why it turns people into zombies. 
      Amazon, at the time as the world’s richest most prominent company, took control of the 
      United States and established order. Amazon divided the remaining survivors into 3 factions 
      and left the independent territory of Florida to its own resources. Amazon uses its new 
      service, titled “Amazon Prime Z” to help the district and its residence keep up with inventory.
      It also allows new residents to join or change factions. Amazon watches from its headquarters afar 
      as the residents of the factions struggle to survive, “Unable” to interfere, but always there to help

      </p>
      <div className="w3-row w3-padding-64">
        <div className="w3-third">
          <p>The North</p>
          <img
            src="zombie.png"
            className="w3-round w3-margin-bottom"
            alt="The North"
            style={{ width: "60%" }}
          />
        </div>
        <div className="w3-third">
          <p>The South</p>
          <img
            src="zombie.png"
            className="w3-round w3-margin-bottom"
            alt="Random Name"
            style={{ width: "60%" }}
          />
        </div>
        <div className="w3-third">
          <p>The East</p>
          <img
            src="zombie.png"
            className="w3-round"
            alt="Random Name"
            style={{ width: "60%" }}
          />
        </div>
      </div>
    </div>
   
   
   
    {/* The Tour Section */}
    <div className="" id="tour">
      <div
        className="w3-container w3-content w3-padding-64"
        style={{ maxWidth: 800 }}
      >
        <h2 className="w3-wide w3-center">TOUR DATES</h2>
        <p className="w3-opacity w3-center">
          <i>Remember to book your tickets!</i>
        </p>
        <br />
        <ul className="w3-ul w3-border w3-white w3-text-grey">
          <li className="w3-padding">
            September{" "}
            <span className="w3-tag w3-red w3-margin-left">Sold out</span>
          </li>
          <li className="w3-padding">
            October{" "}
            <span className="w3-tag w3-red w3-margin-left">Sold out</span>
          </li>
          <li className="w3-padding">
            November{" "}
            <span className="w3-badge w3-right w3-margin-right">3</span>
          </li>
        </ul>
        <div
          className="w3-row-padding w3-padding-32"
          style={{ margin: "0 -16px" }}
        >
          <div className="w3-third w3-margin-bottom">
            <img
              src="/w3images/newyork.jpg"
              alt="New York"
              style={{ width: "100%" }}
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>New York</b>
              </p>
              <p className="w3-opacity">Fri 27 Nov 2016</p>
              <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
              <button
                className="w3-button w3-black w3-margin-bottom"
                onclick="document.getElementById('ticketModal').style.display='block'"
              >
                Buy Tickets
              </button>
            </div>
          </div>
          <div className="w3-third w3-margin-bottom">
            <img
              src="/w3images/paris.jpg"
              alt="Paris"
              style={{ width: "100%" }}
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>Paris</b>
              </p>
              <p className="w3-opacity">Sat 28 Nov 2016</p>
              <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
              <button
                className="w3-button w3-black w3-margin-bottom"
                onclick="document.getElementById('ticketModal').style.display='block'"
              >
                Buy Tickets
              </button>
            </div>
          </div>
          <div className="w3-third w3-margin-bottom">
            <img
              src="/w3images/sanfran.jpg"
              alt="San Francisco"
              style={{ width: "100%" }}
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>San Francisco</b>
              </p>
              <p className="w3-opacity">Sun 29 Nov 2016</p>
              <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
              <button
                className="w3-button w3-black w3-margin-bottom"
                onclick="document.getElementById('ticketModal').style.display='block'"
              >
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Ticket Modal */}
    <div id="ticketModal" className="w3-modal">
      <div className="w3-modal-content w3-animate-top w3-card-4">
        <header className="w3-container w3-teal w3-center w3-padding-32">
          <span
            onclick="document.getElementById('ticketModal').style.display='none'"
            className="w3-button w3-teal w3-xlarge w3-display-topright"
          >
            ×
          </span>
          <h2 className="w3-wide">
            <i className="fa fa-suitcase w3-margin-right" />
            Tickets
          </h2>
        </header>
        <div className="w3-container">
          <p>
            <label>
              <i className="fa fa-shopping-cart" /> Tickets, $15 per person
            </label>
          </p>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="How many?"
          />
          <p>
            <label>
              <i className="fa fa-user" /> Send To
            </label>
          </p>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="Enter email"
          />
          <button className="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">
            PAY <i className="fa fa-check" />
          </button>
          <button
            className="w3-button w3-red w3-section"
            onclick="document.getElementById('ticketModal').style.display='none'"
          >
            Close <i className="fa fa-remove" />
          </button>
          <p className="w3-right">
            Need{" "}
            <a href="#" className="w3-text-blue">
              help?
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>

);
}

export default Home1;