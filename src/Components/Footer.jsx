import React from "react";
import "../App/App.css";
import "../Pages/Home/home.css";
import { Nav, Button, Image, Dropdown } from "react-bootstrap";


function Footer(){
    return(
        <div>
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
        
        <footer className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
            <i className="fa fa-facebook-official w3-hover-opacity" />
            <i className="fa fa-instagram w3-hover-opacity" />
            <i className="fa fa-snapchat w3-hover-opacity" />
            <i className="fa fa-pinterest-p w3-hover-opacity" />
            <i className="fa fa-twitter w3-hover-opacity" />
            <i className="fa fa-linkedin w3-hover-opacity" />
            <p className="w3-medium">
            Powered by{" "}   
            <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
                w3.css
            </a>
            </p>
        </footer></div>
    );
    
}

export default Footer;