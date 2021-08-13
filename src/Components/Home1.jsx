
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
  <div className=" w3-content" style={{ maxWidth: 2000, marginTop: 8 }}>


  <div className="w3-container w3-content w3-center"
      style={{ maxWidth: 1500  }} >
    
            {/* Header */}
              <header
                className="w3-display-container w3-content w3-wide "
                style={{ maxWidth: 1500 }}
                id="home">

                <h1 className="w3-wide">Amazon Prime Z</h1>
                  <p className="w3-opacity">
                    <i>Amazon today, amazon tomorrow, amazon forever</i>
                </p>

                <img
                  className="w3-image"
                  src="amazonhq.jpg"
                  alt="Architecture"
                  width={1800}
                  height={800}/>
              </header>
  </div>
  {/*END Container 1*/} 

    {/* The Band Section */}
    <div
      className="w3-container w3-content w3-center w3-padding-32"
      style={{ maxWidth: 800 }}
      id="band"
    >
      <h1 className="w3-wide">Our History</h1>
     
 

<p className="w3-opacity">
        <i>Amazon HQ</i>
      </p>
      <p className="w3-justify w3-padding-16">
      In the year 2069 an infected BigMac help spread a new virus throughout the world. 
      The newly discovered Z virus turned people into zombies that ravaged the world. 
      No one knows where the virus came from or why it turns people into zombies. 
      Amazon, at the time as the world’s richest most prominent company, took control of the 
      United States and established order. Amazon divided the remaining survivors into 3 factions 
      and left the independent territory of Florida to its own resources. Amazon uses its new 
      service, titled “Amazon Prime Z” to help the district and its residence keep up with inventory.
      It also allows new residents to join or change factions. Amazon watches from its headquarters afar 
      as the residents of the factions struggle to survive, “Unable” to interfere, but always there to help.
      </p>

      <p className="w3-justify w3-padding-16">
      Amazon HQ, located in the former state of Nebraska, is in the heart of the NoNo zone,
       and thus is unfortunately inaccessible to the surrounding factions. Even so, Amazon is 
       an impenetrable fortress that established the faction system in place now. It was created 
       by the wealthiest members of society. The factions are free to do as they please, but Amazon 
       helps them keep track of inventory and survivor population. Amazon wishes for the survival of
        humanity within the factions, as such, any allegations that amazon amasses zombies to send hordes 
        towards the faction boarders for entertainment and research is false.

      </p>
        <img
        src="hqirl.jpg"
        alt="Me"
        className="w3-image"
        style={{ display: "block", margin: "auto" }}
        width={900}
        height={533}
      />
    </div>
  </div>
</div>

);
}

export default Home1;