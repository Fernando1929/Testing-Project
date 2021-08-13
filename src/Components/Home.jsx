
import React from "react";
import "../App/App.css";
import "../Pages/Home/home.css";
import { Navbar, Nav, Button, Image, Dropdown } from "react-bootstrap";
import Map from "./Map";
import zombie from '../images/zombie.png';

function Home(props) {
    return (
        <div className="App">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/Users/kris/Documents/GitHub/awsproj/awshtml/koko.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
                    crossorigin="anonymous"></script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Nosifer&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />

                <title>Amazon Prime Z </title>
            </head>
            <div class='mainb'>
                <div class='topcontainer'>
                    <div class='head'>
                        <h1 id='header1' > Amazon Prime Z  </h1>
                        Amazon today, amazon tomorrow, amazon forever
                        <div class='zombie'> <img src={zombie} width="100" height="100" /></div>
                    </div>
                    <div class="body1">

                        <div class='p1'> <p>
                            In the year 2069 an infected BigMac help spread a new virus throughout the world. The newly discovered Z virus turned people into zombies that ravaged the world. No one knows where the virus came from or why it turns people into zombies.
                            Amazon, at the time as the world’s richest most prominent company, took control of the United States and established order. Amazon divided the remaining survivors into 3 factions and left the independent territory of Florida to its own resources. Amazon uses its new service, titled “Amazon Prime Z” to help the district and its residence keep up with inventory. It also allows new residents to join or change factions. Amazon watches from its headquarters afar as the residents of the factions struggle to survive, “Unable” to interfere, but always there to help
                        </p>
                        </div>
                        {/* <Map /> */}
                    </div>


                </div>
                <div class='middlecontainer'></div>
                <div class='bottomcontainer'>
                </div>
            </div>s
        </div >


    );
}

export default Home;