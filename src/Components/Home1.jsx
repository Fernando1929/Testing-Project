
import React from "react";
import "../App/App.css";
import "../Pages/Home/home.css";
import "../Pages/Factions/factions.css";


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
  </div>
</div>

);
}

export default Home1;