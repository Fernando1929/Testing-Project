import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "../App/App.css";
import "../Pages/Login/login.css";
import {withRouter} from "react-router-dom"; 
import { credentialHandler } from "../Apis/Credentials.js";
import Auth from "../utils/Auth";

function LoginForm(props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error_message, setErrors] = useState([]);

    const submit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        let errors = [];
        const user = {
        username: username.toLowerCase(),
        password: password,
        };
        credentialHandler(user).then((res) => {
        if (res.status === 200) {
            //Just for now
            Auth.authenticateUser(res.data.token);
            Auth.setUserid(res.data.user_id);
            Auth.setUsername(res.data.username);
            props.history.push("/");
            window.location.reload(false);
            console.log("User logged in", res.data);
        } else {
            errors.push(res.data);
            setErrors(errors);
        }
        });
    }
    };

  const validateForm = () => {
    let errors = [];
    let isValid = true;
    if (!(username.length > 0)) {
      isValid = false;
      errors.push("*Please enter your username.");
    }
    if (!(password.length > 0)) {
      isValid = false;
      errors.push("*Please enter your password.");
    }
    setErrors(errors);
    return isValid;
  };

    return (
      <div className="App">
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
        <div className="w3-black w3-content" style={{ maxWidth: 2000, marginTop: 5}}>
        <Container>
          <Row className="justify-content-center">
            <Col sm={7}>
              <Card style={{ borderRadius: "15px", marginTop: "3rem", marginBottom: "13rem" }}>
                <Card.Body>
                  <Card.Title>
                    <h1
                      className="text-center"
                      style={{
                        fontWeight: "500",
                        fontFamily: "'Open Sans', sans-serif",
                        color:"black"
                      }}
                    >
                      Welcome Back!
                    </h1>
                  </Card.Title>
    
                  <InputGroup style={{ marginBottom: "1rem" }}>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <i className="far fa-user">
                          
                        </i>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      id="Username"
                      placeholder="Username or email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup style={{ marginBottom: "1rem" }}>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <i className="fas fa-lock"></i>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      type="password"
                      id="Password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </InputGroup>
    
                  <div className="notice">
                    {error_message.map((error) => (
                      <h5 key={error_message.indexOf(error)}>{error}</h5>
                    ))}
                  </div>
                  <div className="text-center">
                    <Button
                      className="btn--primary"
                      variant="primary"
                      onClick={(e) => submit(e)}
                    >
                      LOG IN
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        </div>
        </div>);
}

export default withRouter(LoginForm);