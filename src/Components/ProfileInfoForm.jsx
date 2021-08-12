
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import "../App/App.css";
import {withRouter} from "react-router-dom";
import "../Pages/Home/home.css";

function ProfileInfo(props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [error_message, setErrors] = useState([]);
    
    return (
        <div className="App w3-black w3-content" style={{ maxWidth: 2000, marginTop: 5, paddingBottom: "10rem"}}>
        <Container>
        <Row className="justify-content-center">
        <Col sm={7}>
            <Card style={{ borderRadius: "15px", marginTop: "3rem"}}>
            <Card.Body>
                <Card.Title>
                <h1 className="text-center"
                    style={{
                    fontWeight: "600",
                    fontFamily: "'Open Sans', sans-serif",
                    color: "black"
                    }}>
                    Profile Info
                </h1>
                </Card.Title>
                <InputGroup style={{ marginBottom: "1rem" }}>
                <FormControl
                    type="firstName"
                    placeholder="*First name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <FormControl
                    type="lastName"
                    placeholder="*Last name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                <FormControl
                    type="city"
                    id="city"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                <FormControl
                    type="country"
                    id="country"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                </InputGroup>

                <p className="notice">Fields with "*" are required.</p>
                <div className="error_message">
                {error_message.map((error) => (
                    <h5>{error}</h5>
                ))}
                </div>
                <div className="text-center">
                <Button
                    type="submit"
                    onClick={(e) => props.history.push("/")}
                    className="btn--primary"
                    variant="primary"
                >
                    Continue{" "}
                </Button>
                </div>
            </Card.Body>
            </Card>
        </Col>
        </Row>
        </Container>
        </div>
    );
}
export default withRouter(ProfileInfo);
