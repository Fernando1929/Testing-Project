import React from "react";
import "../App/App.css";
import "../Pages/Home/home.css";
import { Nav, Button, Image, Dropdown } from "react-bootstrap";
import Navbar from "./Navbar";

function About(props) {
    

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
      {/* Page content */}
      <div className=" w3-content" style={{ maxWidth: 2000, marginTop: 0 }}>
    
    
          <div className="w3-container" id="designers" style={{ marginTop: 0 }}>
      <h1 className="w3-xxxlarge w3-text-White">
        <b>Meet the team</b>
      </h1>
      <hr style={{ }} className="w3-round" />
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
    <div className="w3-row-padding">
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
              Rico '22 
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


}
export default About;