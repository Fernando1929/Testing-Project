
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
import { survivorInfoHandler, leaderInfoHandler,locationHandler } from "../Apis/user";
import Auth from "../utils/Auth";

function ProfileInfo(props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [city, setCity] = useState("");
    const [st, setST] = useState("");
    const [bd, setBD] = useState("");
    const [error_message, setErrors] = useState([]);
    const [survivor, setSurvivor] = useState(Boolean);
    
    const account_id = parseInt(Auth.getUserid());
    
    const submit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log("validated");
        const user = {
          user_firstname: firstname,
          user_lastname: lastname,
          user_date_birth:bd,
          cred_id: account_id
        };
        
        if (survivor){
        survivorInfoHandler(user).then((res) => {
          //Here send things to the handler
          if (res.status === 201) {
            const location = {
              city: city,
              state_province: st,
              user_id:res.data.survivor.user_id
            };
            //make the call to inser the location
            locationHandler(location).then((res) => {
              if (res.status === 201) {
              props.history.push("/login"); 
              }
            });
          //test to make sure the redirect happens
          }
        });
        }
        else{
          leaderInfoHandler(user).then((res) => {
            //Here send things to the handler
            if (res.status === 201) {
              const location = {
                city: city,
                state_province: st
              };
              //make the call to inser the location
              locationHandler(location).then((res) => {
                if (res.status === 201) {
                props.history.push("/login"); 
                }
              });
            //test to make sure the redirect happens
            }
          });
        }
      }
    };
  
    const validateForm = () => {
      let errors = [];
      let isValid = true;
      if (!(firstname.length > 0)) {
        isValid = false;
        errors.push("*Please enter your first name.");
      }
      if (!(lastname.length > 0)) {
        isValid = false;
        errors.push("*Please enter your last name.");
      }
      setErrors(errors);
      return isValid;
    };
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
                    type="Birth Date"
                    id="Birth Date"
                    placeholder="Birth Date"
                    value={bd}
                    onChange={(e) => setBD(e.target.value)}
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
                    type="state"
                    id="state"
                    placeholder="State"
                    value={st}
                    onChange={(e) => setST(e.target.value)}
                />
                </InputGroup>
                <div onChange={(e) => setSurvivor(e.target.value)} style={{ color: "black"}}>
                
               <label style={{ marginRight:'2rem'}}><input type="radio" value="false" name="userType" style={{ }}/> Faction Leader </label> 
               <label><input type="radio" value="true" name="userType" style={{ }}/> Survivor </label> 
                </div>

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
        </div>
    );
}
export default withRouter(ProfileInfo);
