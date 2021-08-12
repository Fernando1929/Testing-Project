
import React from "react";
import "../App/App.css";
import "../Pages/Home/home.css";
import { Nav, Button, Image, Dropdown } from "react-bootstrap";

function ProfileInfo(props) {
    return (
        <Container>
        <Row className="justify-content-center">
        <Col sm={7}>
            <Card style={{ borderRadius: "15px", marginTop: "3rem" }}>
            <Card.Body>
                <Card.Title>
                <h1
                    className="text-center"
                    style={{
                    fontWeight: "600",
                    fontFamily: "'Open Sans', sans-serif",
                    }}
                >
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
                    type="phone"
                    id="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label className="text-muted" style={{ fontSize: "smaller" }}>
                    Besides the leading ‘+’ in the country code, all characters
                    should be numeric. Ex. +17871234567.
                </label>
                </InputGroup>
                <InputGroup style={{ marginBottom: "1rem" }}>
                <FormControl
                    type="street_address"
                    id="street_address"
                    placeholder="Street Address"
                    value={street_address}
                    onChange={(e) => setStreetAddress(e.target.value)}
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
                    onClick={(e) => submit(e)}
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
    );
}
export default ProfileInfo;
