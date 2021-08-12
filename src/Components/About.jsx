
import React from "react";
import "../App/App.css";
import "../Pages/Home/home.css";
import { Nav, Button, Image, Dropdown } from "react-bootstrap";
import Navbar from "./Navbar";

function About(props) {
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
  <Navbar/>
    <div className="w3-container w3-content w3-padding-64"
      style={{ maxWidth: 800 }}
      id="contact"
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
        </body>
    );
}
export default About;