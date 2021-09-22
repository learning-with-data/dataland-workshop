import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import client from "./api";
import Login from "./Login";
import Story from "./Story";

import "dataland-gui/dist/main.css";
import "./App.css";

function App() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    client.authenticate().catch(() => {
      setLogin(null);
    });

    client.on("authenticated", (loginResult) => {
      setLogin(loginResult);
    });

    client.on("logout", () => {
      setLogin(null);
    });
  });

  if (login === undefined) {
    return (
      <Container fluid className="d-flex flex-column min-vh-100">
        <h1>Loading...</h1>
      </Container>
    );
  } else if (login) {
    return (
      <Container fluid className="d-flex flex-column min-vh-100">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Dataland: The Penguin Chronicles</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#logout" onClick={() => client.logout()}>Logout</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Story/>
      </Container>
    );
  }

  return (
    <Container fluid className="d-flex flex-column min-vh-100">
      <Login />
    </Container>
  );
}

export default App;
