
import React from "react";
import "../App/App.css";
import "../Pages/Home/home.css";
import { Navbar, Nav, Button, Image, Dropdown } from "react-bootstrap";
import Map from "./Map";
import zombie from '/Users/kris/Documents/codes/awsprj/Testing-Project/src/zombie.png';

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
                
    
                <title>Amazon Prime Z </title>
            </head>
            <Nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> prime z</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Inventory</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Vaccine</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Factions
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Faction A</a></li>
                                    <li><a class="dropdown-item" href="#">Faction B</a></li>
                                    <li><a class="dropdown-item" href="#">Faction C</a></li>
                                    <li><a class="dropdown-item" href="#">Faction D</a></li>

                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">temp</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <span class='b1'> <button type="button" class="btn btn-light">Login </button> </span>
                            <span class='b2'> <button type="button" class="btn btn-light">Sign Up </button> </span>


                        </form>
                    </div>
                </div>
            </Nav>
            <div class='mainb'>
                <div class="body1">
                    <h1 id='fh1'> Amazon Prime Z </h1> <br /><br /><br />
                    <div class='p1'> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt assumenda fugit
                        dolore aut nam
                        deleniti excepturi minima perferendis numquam corporis odit beatae, ut ullam odio tempore reprehenderit, quo
                        rem.
                        Ad ex necessitatibus molestias odio quae eligendi cum iusto assumenda ut nobis libero at quaerat consequatur
                        accusamus, distinctio dolore voluptates error praesentium. Saepe inventore consequatur nihil at repudiandae
                        laborum debitis.</p>
                    </div>
                    {/* <Map /> */}
                </div>
              <div class = 'zombie'> <img src={zombie} width="100" height = "100"/></div>
                <div class='newsfeed'>
                    <h3>Related Articles </h3>
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active" >
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                                <small>3 days ago</small>
                            </div>
                            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                                blandit.</p>
                            <small>Donec id elit non mi porta.</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                                <small class="text-muted">3 days ago</small>
                            </div>
                            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                                blandit.</p>
                            <small class="text-muted">Donec id elit non mi porta.</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                                <small class="text-muted">3 days ago</small>
                            </div>
                            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                                blandit.</p>
                            <small class="text-muted">Donec id elit non mi porta.</small>
                        </a>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Home;