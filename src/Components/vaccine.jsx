import React from "react";
import "../App/App.css";
import "../Pages/Home/home.css";
import "../Pages/Vaccine/vaccine.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Nav, Button, Image, Dropdown } from "react-bootstrap";

function Vaccine(props) {
  return (
    <div class="mainbody">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Vaccine Page</title>
      {/* ----Bootstrap ----*/}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
        crossOrigin="anonymous"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
        crossOrigin="anonymous"
      />
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Share+Tech+Mono&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="src/Pages/Vaccine/vaccine.css" />
      <script src="//static.miniclipcdn.com/js/game-embed.js"></script>
      <Navbar />
      <div className="top-container">
        <div className="container-fluid">
          <div className="jump">
            <div
              style={{ background: "transparent !important" }}
              className="jumbotron"
            >
              <h1>Your Safety Is Our Priority</h1>
              <p id="jp1">
                Amazon Prime Z is commited to ensuring the safety of all human
                life. We understand how dire the situation is, and we are
                working dilegantly with the most esteemed and established
                doctors across the world to find a cure to the zombie epidemic.{" "}
                <br />
                Thank you for your patience.
              </p>
            </div>
          </div>
        </div>
        <div className="middle-container">
          <div className="pro">
            <p id="prop">Our Progress in cretaing the vaccine</p>
            <div className="progress">
              <div
                className="
                progress-bar progress-bar-striped progress-bar-animated
                bg-success
              "
                role="progressbar"
                aria-valuenow={20}
                aria-valuemin={20}
                aria-valuemax={100}
                style={{ width: "25%" }}
              />
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <p id="gameP">
            The vaccine is coming soon, but until then you can play:
          </p>
          <div clas="game">
            <div
              className="miniclip-game-embed"
              data-game-name="zombie-choppa"
              data-theme={5}
              data-width={700}
              data-height={350}
              data-language="en"
            >
              <a href="https://www.miniclip.com/games/zombie-choppa/">
                Play Zombie Choppa
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Vaccine;
