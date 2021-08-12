import React from 'react';
import ReactDOM from 'react-dom';
import AnyChart from 'anychart-react';
import anychart from 'anychart';
//important do not delete
import gdata1 from "../Pages/Map/b.js";
import Navbar from "./Navbar";
//important do not delete

let data = anychart.data.set([
  {'id': 'US.TX', 'value': 0, 'fill':'#FF0000'},
  {'id': 'US.FL', 'value': 0, 'fill':'yellow'},
  {'id': 'US.NY', 'value': 0, 'fill':'orange'},
  {'id': 'US.CA', 'value': 0, 'fill':'#FF0000'}
]);

function Map (props){
return(
    <body>
    <div>
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
    </div> 
    <Navbar/>
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
    </body>);
}

export default Map;