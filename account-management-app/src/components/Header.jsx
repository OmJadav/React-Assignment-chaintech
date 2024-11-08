import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="py-1 shadow-sm">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold text-uppercase">
          Account Management
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/" className="nav-link px-3 text-white">
              Home
            </Nav.Link>
          </Nav>
          <Link to={"/login"}>
            <Button variant="outline-light mx-3" className="rounded-pill">
              Login
            </Button>
          </Link>
          <Link to={"/register"}>
            <Button variant="outline-light" className="rounded-pill">
              Sign up
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
