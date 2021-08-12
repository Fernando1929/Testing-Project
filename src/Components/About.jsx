
import React from "react";
import "../App/App.css";
import "../Pages/Home/home.css";
import { Nav, Button, Image, Dropdown } from "react-bootstrap";
import Navbar from "./Navbar";

function About(props) {
    return (
        <div className="App">
            
            
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  {/* Navbar (sit on top) */}
  <Navbar/>
  {/* Header */}
  <header
    className="w3-display-container w3-content w3-wide"
    style={{ maxWidth: 1500 }}
    id="home"
  >
    <img
      className="w3-image"
      src="/w3images/architect.jpg"
      alt="Architecture"
      width={1500}
      height={800}
    />
    <div className="w3-display-middle w3-margin-top w3-center">
      <h1 className="w3-xxlarge w3-text-white">
        <span className="w3-padding w3-black w3-opacity-min">
          <b>BR</b>
        </span>{" "}
        <span className="w3-hide-small w3-text-light-grey">Architects</span>
      </h1>
    </div>
  </header>
  {/* Page content */}
  <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
    {/* Project Section */}
    <div className="w3-container w3-padding-32" id="projects">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
        Projects
      </h3>
    </div>
    <div className="w3-row-padding">
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">
            Summer House
          </div>
          <img
            src="/w3images/house5.jpg"
            alt="House"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">
            Brick House
          </div>
          <img
            src="/w3images/house2.jpg"
            alt="House"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">
            Renovated
          </div>
          <img
            src="/w3images/house3.jpg"
            alt="House"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">
            Barn House
          </div>
          <img
            src="/w3images/house4.jpg"
            alt="House"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
    <div className="w3-row-padding">
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">
            Summer House
          </div>
          <img
            src="/w3images/house2.jpg"
            alt="House"
            style={{ width: "99%" }}
          />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">
            Brick House
          </div>
          <img
            src="/w3images/house5.jpg"
            alt="House"
            style={{ width: "99%" }}
          />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">
            Renovated
          </div>
          <img
            src="/w3images/house4.jpg"
            alt="House"
            style={{ width: "99%" }}
          />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">
            Barn House
          </div>
          <img
            src="/w3images/house3.jpg"
            alt="House"
            style={{ width: "99%" }}
          />
        </div>
      </div>
    </div>




    {/* About Section */}
    <div className="w3-container w3-padding-32" id="about">
      <h1 className="w3-border-bottom w3-border-light-grey w3-padding-16">
        About
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
        <img src="zombie.png" alt="John" style={{ width: "100%" }} />
        <h2>The North</h2>
        <p className="w3-opacity ">CEO &amp; Winter is comming</p>
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
        <img src="zombie.png" alt="Jane" style={{ width: "100%" }} />
        <h2>The East</h2>
        <p className="w3-opacity">I'm Walkin' here!</p>
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
        <img src="zombie.png" alt="Mike" style={{ width: "100%" }} />
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
        <p className="w3-opacity">Architect</p>
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





    {/* Contact Section */}
    <div className="w3-container w3-padding-32" id="contact">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
        Contact
      </h3>
      <p>Lets get in touch and talk about your next project.</p>
      <form action="/action_page.php" target="_blank">
        <input
          className="w3-input w3-border"
          type="text"
          placeholder="Name"
          required
          name="Name"
        />
        <input
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Email"
          required
          name="Email"
        />
        <input
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Subject"
          required
          name="Subject"
        />
        <input
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Comment"
          required
          name="Comment"
        />
        <button className="w3-button w3-black w3-section" type="submit">
          <i className="fa fa-paper-plane" /> SEND MESSAGE
        </button>
      </form>
    </div>
    {/* Image of location/map */}
    <div className="w3-container">
      <img
        src="/w3images/map.jpg"
        className="w3-image"
        style={{ width: "100%" }}
      />
    </div>
    {/* End page content */}
  </div>
  {/* Footer */}
  <footer className="w3-center w3-black w3-padding-16">
    <p>
      Powered by{" "}
      <a
        href="https://www.w3schools.com/w3css/default.asp"
        title="W3.CSS"
        target="_blank"
        className="w3-hover-text-green"
      >
        w3.css
      </a>
    </p>
  </footer>





      </div>
    );
}
export default About;