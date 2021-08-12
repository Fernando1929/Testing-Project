
import React from "react";
import createClass from 'create-react-class';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import "../App/App.css";
import "../Pages/Home/home.css";
import "../Pages/Factions/factions.css";
import { Navbar, Nav, Button, Image, Dropdown } from "react-bootstrap";
import Map from "./Map";
//import zombie from '../images/zombie.png';
import Stark from '../images/Stark.png';

//important do not delete
import AnyChart from 'anychart-react';
import anychart from 'anychart';
import gdata1 from "../Pages/Map/b.js";
//important do not delete

let data = anychart.data.set([
  
  {'id': 'US.FL', 'value': 0, 'fill':'yellow'},

  {'id': 'US.NY', 'value': 0, 'fill':'blue'},
  {'id': 'US.CA', 'value': 0, 'fill':'#FF0000'},
  {'id': 'US.NV', 'value': 0, 'fill':'#FF0000'},
  {'id': 'US.TX', 'value': 12, 'fill':'#FF0000'},
]);


function Factions(props) {

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
  {/* Navbar */}
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
      <a href="#" className="w3-bar-item w3-button w3-padding-large">
        HOME
      </a>
      <a
        href="#factions"
        className="w3-bar-item w3-button w3-padding-large w3-hide-small"
      >
        FACTIONS
      </a>
      <a
        href="#about-us"
        className="w3-bar-item w3-button w3-padding-large w3-hide-small"
      >
        ABOUT US
      </a>
      <a
        href="#tickets"
        className="w3-bar-item w3-button w3-padding-large w3-hide-small"
      >
        INVENTORY
      </a>
      <a
        href="#vaccine"
        className="w3-bar-item w3-button w3-padding-large w3-hide-small"
      >
        VACCINE
      </a>
      <div className="w3-dropdown-hover w3-hide-small">
        <button className="w3-padding-large w3-button" title="More">
          MORE <i className="fa fa-caret-down" />
        </button>
        <div className="w3-dropdown-content w3-bar-block w3-card-4">
          <a href="#" className="w3-bar-item w3-button">
            Merchandise
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Extras
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Media
          </a>
        </div>
      </div>
      <a
        href="javascript:void(0)"
        className="w3-padding-large w3-hover-red w3-hide-small w3-right"
      >
        <i className="fa fa-search" />
      </a>
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
      CONTACT
    </a>
    <a
      href="#"
      className="w3-bar-item w3-button w3-padding-large"
      onclick="myFunction()"
    >
      MERCH
    </a>
  </div>










  {/* Page content */}
  <div className="w3-content" style={{ maxWidth: 2000, marginTop: 46 }}>

    
    {/* Automatic Slideshow Images */}
    <div className="mySlides w3-display-container w3-center">
      <img src="zombie.png" style={{ width: "100%" }} />
      <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
        <h3>Los Angeles</h3>
        <p>
          <b>We had the best time playing at Venice Beach!</b>
        </p>
      </div>
    </div>
    <div className="mySlides w3-display-container w3-center">
    <img src="zombie.png" style={{ width: "100%" }} />
      <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
        <h3>New York</h3>
        <p>
          <b>The atmosphere in New York is lorem ipsum.</b>
        </p>
      </div>
    </div>
    <div className="mySlides w3-display-container w3-center">
    <img src="zombie.png" style={{ width: "100%" }} />
      <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
        <h3>Chicago</h3>
        <p>
          <b>Thank you, Chicago - A night we won't forget.</b>
        </p>
      </div>
    </div>



    {/* The Factions Section */}
    <div
      className="w3-container w3-content w3-center w3-padding-"
      style={{ maxWidth: 1200  }}
      id="factions"
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
        width={800}
        height={533}
      />

      <p className="w3-justify">
      
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


      

 {/* Map of factions dimensions */}
      <html>
    <head>
    </head>
    <body>
      <div id="ac-chart"  style={{ 
        display: "block",
        textAlign: "center",
        border:"none"}}>
      <AnyChart
          width={800}
          height={600}
          type="choropleth"
          data={data}
          title="Map of Factions"
          geoData='anychart.maps.united_states_of_america'
          borders="none"
          style={{backgroundColor:"grey"}}
        /></div>
    </body>
  </html>
{/*End Map of factions dimensions */}


{/* About Section */}
<div className="w3-container w3-padding-32" id="about">
      <h1 className="w3-border-bottom w3-border-light-grey w3-padding-16">
        FACTIONS
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div className="w3-row-padding w3-grayscale">
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img src="Stark.png" alt="John" style={{ width: "100%" }} />
        <h2>The North</h2>
        <p className="w3-opacity "> Winter is comming</p>
        <p>
        The northern territories are made up of small communities that strive on survival skills.
        Hunting and farming are the main way to stay alive. But harsh winters make most 
        crops unavailable and boarders hard to maintain. Even so the northern people are strong and resilient.
        </p>
        <p>
          <button className="w3-button w3-light-grey w3-block">Contact</button>
        </p>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img src="Martell.png" alt="Jane" style={{ width: "100%" }} />
        <h2>The East</h2>
        <p className="w3-opacity">I'm Walkin' here! &amp; Unbowed, Unbent, Unbroken</p>
        <p>
        The eastern territories are made up of large cities and population centers. 
        They survive on a combination of hunting, fishing and trading with the other. 
        Although the have the largest population,they also have the most fortified borders 
        out of all factions, so zombie attacks are generally contained. 
        </p>
        <p>
          <button className="w3-button w3-light-grey w3-block">Contact</button>
        </p>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img src="Targaryen.png" alt="Mike" style={{ width: "100%" }} />
        <h2>The South</h2>
        <p className="w3-opacity">Fire and Blood</p>
        <p>
        The Southern territories are a harsh a baron wasteland. The people of the south are in constant battle 
        with the zombie hoards that attempt to migrate south, escaping the cold winters of the north and east. 
        They survive mostly on livestock and weapons trading with the northern and eastern factions.
        The people of the south live by the motto “Fire and blood”. 
        </p>
        <p>
          <button className="w3-button w3-light-grey w3-block">Contact</button>
        </p>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img src="zombie.png" alt="Dan" style={{ width: "100%" }} />
        <h2>Florida</h2>
        <p className="w3-opacity">Gone to FLorida. Be back never</p>
        <p>
        For many years the territory of Florida (named after the former state of Florida) 
        was cut off from the rest of the factions, Amazon HQ only kept watch from afar. 
        As a result Florida developed into a land of misfits and outlaws that survive by any 
        means necessary. The people of Florida constantly invade the
         southern faction to steal resources and to cause general mayhem. That’s why no one liked Florida. 
        </p>
        <p>
          <button className="w3-button w3-light-grey w3-block">Contact</button>
        </p>
      </div>
    </div>


  </div>



    {/* The About us Section */}
    <div className="w3-black" id="about-us">
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


    {/* Inventory seccion */}
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



    {/* The Vaccine Section */}
    <div
      className="w3-container w3-content w3-padding-64"
      style={{ maxWidth: 800 }}
      id="vaccine"
    >
      <h2 className="w3-wide w3-center">CONTACT</h2>
      <p className="w3-opacity w3-center">
        <i>Fan? Drop a note!</i>
      </p>
      <div className="w3-row w3-padding-32">
        <div className="w3-col m6 w3-large w3-margin-bottom">
          <i className="fa fa-map-marker" style={{ width: 30 }} /> Chicago, US
          <br />
          <i className="fa fa-phone" style={{ width: 30 }} /> Phone: +00 151515
          <br />
          <i className="fa fa-envelope" style={{ width: 30 }}>
            {" "}
          </i>{" "}
          Email: mail@mail.com
          <br />
        </div>
        <div className="w3-col m6">
          <form action="/action_page.php" target="_blank">
            <div
              className="w3-row-padding"
              style={{ margin: "0 -16px 8px -16px" }}
            >
              <div className="w3-half">
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Name"
                  required
                  name="Name"
                />
              </div>
              <div className="w3-half">
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Email"
                  required
                  name="Email"
                />
              </div>
            </div>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Message"
              required
              name="Message"
            />
            <button
              className="w3-button w3-black w3-section w3-right"
              type="submit"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
    {/* End Page Content */}


  </div>
  {/* Image of location/map */}
  <img
    src="zombie.png"
    className="w3-image w3-greyscale-min"
    style={{ width: "10%" }}
  />
  {/* Footer */}
  <footer className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
    <i className="fa fa-facebook-official w3-hover-opacity" />
    <i className="fa fa-instagram w3-hover-opacity" />
    <i className="fa fa-snapchat w3-hover-opacity" />
    <i className="fa fa-pinterest-p w3-hover-opacity" />
    <i className="fa fa-twitter w3-hover-opacity" />
    <i className="fa fa-linkedin w3-hover-opacity" />
    <p className="w3-medium">
      Powered by{" "}
      <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
        w3.css
      </a>
    </p>
  </footer>
</div>

  );
  }

export default Factions;