import React from "react";
import "../App/App.css";
import "../Pages/Home/home.css";
import { Nav, Button, Image, Dropdown } from "react-bootstrap";
import Navbar from "./Navbar";

function About(props) {
  return (
    <div className="App">
      return(
      <div className="App">
        <title>W3.CSS Template</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        {/* Navbar (sit on top) */}
        <Navbar />
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
              <span className="w3-hide-small w3-text-light-grey">
                Architects
              </span>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="w3-row-padding w3-grayscale">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img src="zombie.png" alt="John" style={{ width: "100%" }} />
              <h2>The North</h2>
              <p className="w3-opacity ">CEO &amp; Winter is comming</p>
              <p>
                The northern territories are made up of small communities that
                strive on survival skills. Hunting and farming are the main way
                to stay alive. But harsh winters make most crops unavailable and
                boarders hard to maintain. Even so the northern people are
                strong and resilient.
              </p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Contact
                </button>
              </p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img src="zombie.png" alt="Jane" style={{ width: "100%" }} />
              <h2>The East</h2>
              <p className="w3-opacity">I'm Walkin' here!</p>
              <p>
                The eastern territories are made up of large cities and
                population centers. They survive on a combination of hunting,
                fishing and trading with the other. Although the have the
                largest population,they also have the most fortified borders out
                of all factions, so zombie attacks are generally contained.
              </p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Contact
                </button>
              </p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img src="zombie.png" alt="Mike" style={{ width: "100%" }} />
              <h2>The South</h2>
              <p className="w3-opacity">Fire and Blood</p>
              <p>
                The Southern territories are a harsh a baron wasteland. The
                people of the south are in constant battle with the zombie
                hoards that attempt to migrate south, escaping the cold winters
                of the north and east. They survive mostly on livestock and
                weapons trading with the northern and eastern factions. The
                people of the south live by the motto “Fire and blood”.
              </p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Contact
                </button>
              </p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img src="zombie.png" alt="Dan" style={{ width: "100%" }} />
              <h2>Florida</h2>
              <p className="w3-opacity">Architect</p>
              <p>
                For many years the territory of Florida (named after the former
                state of Florida) was cut off from the rest of the factions,
                Amazon HQ only kept watch from afar. As a result Florida
                developed into a land of misfits and outlaws that survive by any
                means necessary. The people of Florida constantly invade the
                southern faction to steal resources and to cause general mayhem.
                That’s why no one liked Florida.
              </p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Contact
                </button>
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
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Lato"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\nbody {font-family: "Lato", sans-serif}\n.mySlides {display: none}\n',
        }}
      />
      {/* Page content */}
<<<<<<< HEAD
      <div
        className="w3-black w3-content"
        style={{ maxWidth: 2000, marginTop: 8 }}
      >
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
            In the year 2069 an infected BigMac help spread a new virus
            throughout the world. The newly discovered Z virus turned people
            into zombies that ravaged the world. No one knows where the virus
            came from or why it turns people into zombies. Amazon, at the time
            as the world’s richest most prominent company, took control of the
            United States and established order. Amazon divided the remaining
            survivors into 3 factions and left the independent territory of
            Florida to its own resources. Amazon uses its new service, titled
            “Amazon Prime Z” to help the district and its residence keep up with
            inventory. It also allows new residents to join or change factions.
            Amazon watches from its headquarters afar as the residents of the
            factions struggle to survive, “Unable” to interfere, but always
            there to help
          </p>
        </div>
      </div>
    </div>
  );
=======
      <div className="w3-black w3-content" style={{ maxWidth: 2000, marginTop: 0 }}>
        
          <div className="w3-container" id="designers" style={{ marginTop: 0 }}>
      <h1 className="w3-xxxlarge w3-text-White">
        <b>Meet the team</b>
      </h1>
      <hr style={{ width: 720}} className="w3-round" />
      <p>
        Meeting during our Internship program, we easily connected and had the
        trust to rely on each others ability. Everyone coming from a tech
        background from our undergrads, we all knew how to approach this end of
        program challenge. Working with everyone on the team has been a great
        and smooth experience. Not really knowing each other before the
        Internship challenge, we still managed to connect and rely on each other
        the first day to tackle this project.
      </p>
    </div>


    {/* The Team */}
    <div className="w3-row-padding w3-grayscale">
      <div className="w3-col m4 w3-margin-bottom">
        <div className="w3-light-grey">
          <img src= "alancavazos.png" alt="Alan" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>Roberto Alan Cavazos</h3>
            <p>Technology Management Student at Texas A&amp;M University '22</p>
            <strong>Phone: </strong> +1 (956) 235-1426
            <p />
            <p>
              <strong>Email: </strong> alancavazos@tamu.edu
            </p>
          </div>
        </div>
      </div>
      <div className="w3-col m4 w3-margin-bottom">
        <div className="w3-light-grey">
          <img src="krisholmes.jpeg" alt="Kris" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>Kris Holmes</h3>
            <p>
              Computer Science Student at The University of Texas at San Antonio
              '22
            </p>
            <strong>Phone: </strong> +1 (832) 647-5192
            <p>
              <strong>Email: </strong> Krisholmes444@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="w3-col m4 w3-margin-bottom">
        <div className="w3-light-grey">
          <img src="nomarmedina.jpg" alt="Nomar" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>Nomar Medina Davila</h3>
            <p>
              Software Engineering Student at University of Puerto Rico -
              Mayagüez '21
            </p>
            <p>
              <strong>Phone: </strong> +1 (787) 514-7280
            </p>
            <p>
              <strong>Email: </strong> nomar.medina@upr.edu
            </p>
          </div>
        </div>
      </div>
      <div className="w3-col m4 w3-margin-bottom">
        <div className="w3-light-grey">
          <img src="angelpinto.jpg" alt="Angel" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>Angel Pinto</h3>
            <p>
              Computer Engineering student at Polytechnic University of Puerto
              Rico '22 '21
            </p>
            <p>
              <strong>Phone: </strong> +1 (939) 319-5816
            </p>
            <p>
              <strong>Email: </strong> pinto_101205@students.pupr.edu
            </p>
          </div>
        </div>
      </div>
      <div className="w3-col m4 w3-margin-bottom">
        <div className="w3-light-grey">
          <img src="luisfernando.jpeg" alt="Fernando" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>Luis Fernando Quiles</h3>
            <p>
              Computer Engineering Student at University of Puerto Rico -
              Mayagüez '21
            </p>
            <p>
              <strong>Phone: </strong> +1 (787) 240-2517
            </p>
            <p>
              <strong>Email: </strong> leuis.quiles1@upr.edu
            </p>
          </div>
        </div>
      </div>
    </div>

          

        
      </div>
    </div>
    
    );


>>>>>>> 1e6605d0c0535cd8484662f07f321e53020f1dff
}
export default About;
