import React from 'react';
import ReactDOM from 'react-dom';
import AnyChart from 'anychart-react';
import anychart from 'anychart';
//important do not delete
import gdata1 from "../Pages/Map/b.js";
//important do not delete

let data = anychart.data.set([
  {'id': 'US.TX', 'value': 0, 'fill':'#FF0000'},
  {'id': 'US.FL', 'value': 0, 'fill':'#039be5'},
  {'id': 'US.NY', 'value': 0, 'fill':'orange'}
]);

function Map (props){
return(
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
          title="Map example"
          geoData='anychart.maps.united_states_of_america'
          borders="none"
          style={{backgroundColor:"grey"}}
        /></div>
    </body>
  </html>);
}

export default Map;