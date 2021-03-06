
import React from "react";
import "../App/App.css";
import "../Pages/Home/home.css";
import "../Pages/Factions/factions.css";
import { Nav, Button, Image, Dropdown } from "react-bootstrap";
import Map  from "./Map";
//important do not delete
import AnyChart from 'anychart-react';
import anychart from 'anychart';
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

  {/* Page content */}
  <div className="w3-content" 
  style={{ maxWidth: 2000, marginTop: 0 }}>
   
   
   
    {/* Container 1 image header */}
    <div className="w3-container w3-content w3-center w3-black"
      style={{ maxWidth: 1500  }} >
    
            {/* Header */}
              <header
                className="w3-display-container w3-content w3-wide "
                style={{ maxWidth: 1500 }}
                id="home"
              >
                <img
                  className="w3-image"
                  src="horde.jpg"
                  alt="Architecture"
                  width={1800}
                  height={800}
                />
                <div className="w3-display-middle w3-margin-top w3-center">
                  <h1 className="w3-xxxlarge w3-text-white">
                    <span className="w3-padding w3-orange w3-opacity-min">
                      <b>AZ</b>
                    </span>{" "}
                    <span className="w3-hide-small w3-text-light-grey">Survive</span>
                  </h1>
                </div>
              </header>
  </div>
  {/*END Container 1*/} 
 


 {/* Container 2*/} 
 <div className="w3-container w3-content w3-center w3-padding-32"
      style={{ maxWidth: 1500}} >
 
      <h1 className="w3-border-bottom w3-wide">
        FACTIONS
      </h1>
      <p className=" w3-content w3-center w3-justify "
      style={{ maxWidth: 800}}>

      </p>
  


 <div className="w3-row w3-container w3-content w3-center" style={{ margin: "50px 0" }}>
    <div className="w3-half w3-container w3-content w3-center">
      <div className="w3-content w3-center">
        <h2>The North</h2>
        <img src="Stark.png" style={{ width: "50%" }} />
        <p className="w3-opacity"> Winter is comming</p>
        <p className="w3-justify">
        The northern territories are made up of small communities that strive on survival skills.
        Hunting and farming are the main way to stay alive. But harsh winters make most 
        crops unavailable and boarders hard to maintain. Even so the northern people are strong and resilient.
        </p>
      </div>
    </div>
    <div className="w3-half w3-container w3-content w3-center">
      <div className="">
        <h2>The East</h2>
        <img src="Martell.png" style={{ width: "50%" }} />
        <p className="w3-opacity">I'm Walkin' here! </p>
        <p className="w3-justify">
        The eastern territories are made up of large cities and population centers. 
        They survive on a combination of hunting, fishing and trading with the other. 
        Although the have the largest population,they also have the most fortified borders 
        out of all factions, so zombie attacks are generally contained. 
        </p>
      </div>
    </div>
  </div>
  <div className="w3-row w3-container w3-content w3-center" style={{ margin: "50px 0" }}>
    <div className="w3-half w3-container w3-content w3-center">
      <div className="">
        <h2>The South</h2>
        <img src="Targaryen.png" style={{ width: "50%" }} />    
        <p className="w3-opacity">Fire and Blood</p>
        <p className="w3-justify">
        The Southern territories are a harsh a baron wasteland. The people of the south are in constant battle 
        with the zombie hoards that attempt to migrate south, escaping the cold winters of the north and east. 
        They survive mostly on livestock and weapons trading with the northern and eastern factions.
        The people of the south live by the motto ???Fire and blood???. 
        </p>
      </div>
    </div>
    <div className="w3-half w3-container w3-content w3-center">
      <div className="">
        <h2>Florida</h2>
        <img src="zombie.png" style={{ width: "45%" }} />
        <p className="w3-opacity">Gone to FLorida. Be back never</p>
        <p className="w3-justify"> 
        For many years the territory of Florida (named after the former state of Florida) 
        was cut off from the rest of the factions, Amazon HQ only kept watch from afar. 
        As a result Florida developed into a land of misfits and outlaws that survive by any 
        means necessary. The people of Florida constantly invade the
        southern faction to steal resources and to cause general mayhem. Yes, they drew thier own banner. 
        </p>
      </div>
    </div>
  </div>
  </div>
  {/*END Container 2*/} 

  <div className="w3-container w3-content w3-center w3-black"
      style={{ maxWidth: 1500  }} >
              <h2 className="w3-padding-32 w3-wide">
                   The NoNo Zone
                </h2>
                <div className="w3-display-container w3-content "
                style={{ maxWidth: 1500 }}>
                <img
                  className="w3-image"
                  src="warz.jpg"
                  alt="Architecture"
                  width={1000}
                  height={600}
                />
                <div className="w3-display-top w3-margin-top">
                  <h2 className="w3-xxlarge w3-text-white">
                  
                    <span className="w3-hide-small w3-text-light-grey">Death awaits</span>
                  </h2>
                </div>
                
                <p className=" w3-content w3-justify w3-center w3-padding-32" 
                style={{ maxWidth: 800}}>
                The zombie infested territories, dubbed the NoNo zone by the rest of the factions,
                is the area where the largest populations of zombies reside. The zombie hoards are
                kept at bay by the surrounding factions but every so often large groups of them will 
                randomly attack the boarder of a faction. Territories like the former state of Nevada 
                and Oklahoma have been lost to hoards like these.
                </p>
              </div>
  </div>

 {/* Map of factions dimensions */}
      <div id="ac-chart"  style={{ 
        display: "inline-block",
        textAlign: "center",
        border:"none",}}>
        <Map/> 
     </div>
  </div>


  
  {/* Image of location/map */}
  <img src="zombie.png"
   className="w3-image w3-greyscale-min"
  style={{ width: "10%" }}
  />
</div>

  );
  }

export default Factions;