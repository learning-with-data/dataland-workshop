import React, { useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import client from "./api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <Row className="justify-content-md-center">
      <Col xs lg="2" className="py-5 text-center bg-light">
        <h1 className="h3">Please log in</h1>
        <div className="d-flex justify-content-center align-items-center">
          <Form className="login-form">
            <Form.Group controlId="username">
              <Form.Control
                type="text"
                value={username}
                placeholder="Enter username"
                onChange={(ev) => setUsername(ev.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </Form.Group>
            <Button
              id="submit"
              size="lg"
              type="submit"
              variant="primary"
              onClick={(ev) => {
                ev.preventDefault();
                setError("");
                client
                  .authenticate({ strategy: "local", username, password })
                  .catch((err) => setError(err.message));
              }}
              disabled={username === "" && password === ""}
            >
              Log in
            </Button>
            <Alert
              variant="danger"
              className={`mt-2 align-middle ${error !== "" ? "visible" : "invisible"}`}
            >
              <strong>Error: </strong>
              {error}
            </Alert>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
