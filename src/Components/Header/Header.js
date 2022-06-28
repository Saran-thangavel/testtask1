import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" style={{ padding: "2%" }}>
        <Container style={{ display: "flex" }}>
          <Navbar.Brand className="navbar-brand" href="#">
            ToDo App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "75%" }}>
              <Nav.Item>
                <Nav.Link href="#">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">
                  <Button variant="primary">Add ToDo</Button>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">
                  <Button variant="danger">Logout</Button>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
