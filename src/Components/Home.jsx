
import React from "react";
import "../App/App.css";
import "../Pages/Home/home.css";
import { Navbar, Nav, Button, Image, Dropdown } from "react-bootstrap";
import Map from "./Map";

function Home(props) {
  return (
  <div className="App">
    <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
        crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nosifer&display=swap" rel="stylesheet"/>
    <title>This is the title</title>
</head>
    <Nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"> prime z</a>
            <Button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </Button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">inventory</a>
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
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <Button class="btn btn-outline-success" type="submit">Search</Button>
                </form>
              </div>
          </div>
</Nav>
<div class="body1">
        <h1 id='fh1'>Amazon Prime Z </h1>
        <p ><Map/></p>
        <br/>
        <p id='goat'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia soluta iste possimus dolore
            minus eius cupiditate excepturi dolor, dignissimos dolorum aliquid laboriosam. Illo eum aliquam enim ipsam
            nobis
            commodi unde?
            Nam voluptates iste dolor dicta est tenetur. Fugiat quae voluptatem deleniti! Sint sed corporis, asperiores
            eius
            doloribus ducimus reprehenderit optio dicta, quidem numquam excepturi soluta, nostrum adipisci porro quia
            esse.
            Cumque, ducimus. Odit aperiam, sed tenetur quam eaque assumenda consectetur. Molestiae amet consequuntur
            magnam
            tenetur, ratione sit, quod blanditiis voluptatibus explicabo laborum debitis ex laboriosam eius, qui autem
            ea?
            A?x
            Maiores commodi, incidunt vitae nemo totam optio animi, quidem excepturi quisquam repudiandae omnis
            repellendus
            iste sapiente ipsa earum aut impedit itaque! Ullam quaerat vero expedita ipsa sed cupiditate totam officiis.
            Aspernatur, necessitatibus eius repellat illum magni ullam laborum sunt cum exercitationem. Molestias nulla
            aspernatur quasi esse, provident itaque, officiis pariatur voluptas nihil voluptatem quia dolor cum, impedit
            perferendis sint laboriosam.
        </p>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt assumenda fugit dolore aut nam
            deleniti excepturi minima perferendis numquam corporis odit beatae, ut ullam odio tempore reprehenderit, quo
            rem.
            Ad ex necessitatibus molestias odio quae eligendi cum iusto assumenda ut nobis libero at quaerat consequatur
            accusamus, distinctio dolore voluptates error praesentium. Saepe inventore consequatur nihil at repudiandae
            laborum debitis.
        </div>
    </div>
</div>
);
}

export default Home;