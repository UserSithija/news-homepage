import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../OffcanvasNav/OffcanvasNav.css";
import Logo from "../../assets/images/logo.svg";

const OffcanvasNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <img src={Logo} alt="logo.svg"></img>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-sm"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">New</Nav.Link>
              <Nav.Link href="#action2">Popular</Nav.Link>
              <Nav.Link href="#action2">Trending</Nav.Link>
              <Nav.Link href="#action2">Categories</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default OffcanvasNav;
