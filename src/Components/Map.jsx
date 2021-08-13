import React from 'react';
import AnyChart from 'anychart-react';
import anychart from 'anychart';
//important do not delete
import gdata1 from "../Pages/Map/b.js";
//important do not delete

let data = anychart.data.set([

  {'id': 'US.FL', 'value': 0, 'fill':'yellow'},

  {'id': 'US.WA', 'value': 0, 'fill':'#008220'},
  {'id': 'US.OR', 'value': 0, 'fill':'#008220'},
  {'id': 'US.ID', 'value': 0, 'fill':'#008220'},
  {'id': 'US.MT', 'value': 0, 'fill':'#008220'},
  {'id': 'US.ND', 'value': 0, 'fill':'#008220'},
  {'id': 'US.MN', 'value': 0, 'fill':'#008220'},
  {'id': 'US.WI', 'value': 0, 'fill':'#008220'},
  {'id': 'US.MI', 'value': 0, 'fill':'#008220'},
  
  {'id': 'US.TX', 'value': 0, 'fill':'#FF4F4F'},
  {'id': 'US.CA', 'value': 0, 'fill':'#FF4F4F'},
  {'id': 'US.AZ', 'value': 0, 'fill':'#FF4F4F'},
  {'id': 'US.NM', 'value': 0, 'fill':'#FF4F4F'},
  {'id': 'US.LA', 'value': 0, 'fill':'#FF4F4F'},
  {'id': 'US.MS', 'value': 0, 'fill':'#FF4F4F'},
  
  {'id': 'US.NY', 'value': 0, 'fill':'#016E83'},
  {'id': 'US.MI', 'value': 0, 'fill':'#016E83'},
  {'id': 'US.OH', 'value': 0, 'fill':'#016E83'},
  {'id': 'US.PA', 'value': 0, 'fill':'#016E83'},
  {'id': 'US.WV', 'value': 0, 'fill':'#016E83'},
  {'id': 'US.VA', 'value': 0, 'fill':'#016E83'},
  {'id': 'US.NC', 'value': 0, 'fill':'#016E83'},
  {'id': 'US.MD', 'value': 0, 'fill':'#016E83'},
  {'id': 'US.DE', 'value': 0, 'fill':'#016E83'},
  {'id': 'US.NJ', 'value': 0, 'fill':'#016E83'},
  {'id': 'US.RI', 'value': 0, 'fill':'#016E83'},
  {'id': 'US.CI', 'value': 0, 'fill':'#016E83'},
  {'id': 'US.MA', 'value': 0, 'fill':'#016E83'},
  {'id': 'US.NH', 'value': 0, 'fill':'#016E83'},
  {'id': 'US.NY', 'value': 0, 'fill':'#016E83'},
  {'id': 'US.MC', 'value': 0, 'fill':'#016E83'},
  {'id': 'US.VT', 'value': 0, 'fill':'#016E83'},

  
  {'id': 'US.NV', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.UT', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.WY', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.SD', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.CO', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.KS', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.OK', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.IA', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.MO', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.AR', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.NV', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.IL', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.IN', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.KY', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.TN', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.GA', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.SC', 'value': 0, 'fill':'#FFC0C0'},
  {'id': 'US.AL', 'value': 0, 'fill':'#FFC0C0'},


  {'id': 'US.NE', 'value': 0, 'fill':'#F1C40F'},
  {'id': 'US.HI', 'value': 0, 'fill':'#F1C40F'},
  {'id': 'US.AK', 'value': 0, 'fill':'#F1C40F'},


  

  

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
      <div id="ac-chart"  style={{ 
        display: "inline-block",
        textAlign: "center",
        border:"none"}}>
      <AnyChart
          width={800}
          height={600}
          type="choropleth"
          data={data}
          title="Map of Factions"
          geoData='anychart.maps.united_states_of_america'
        /></div>
    </body>);
}

export default Map;