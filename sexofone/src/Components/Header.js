import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./logo.svg";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    
    <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            className="d-inline-block align-top"
            alt="Logo"
          >
            <image xlinkHref={logo} width="30" height="30" />
          </svg>
          ArtForge
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div className="dropdown">
              <Nav.Link>Music</Nav.Link>
              <div className="dropdown-list">
                <Link to="/Music/Guitar">Guitar</Link>
                <Link to="/Music/Piano">Piano</Link>
                <Link to="/Music/Bass">Bass</Link>
              </div>
            </div>

            <div className="dropdown">
              <Nav.Link>Singing</Nav.Link>
              <div className="dropdown-list">
                <Link to="/Singing/Tembr">Tembr</Link>
                <Link to="/Singing/Singers">Singers</Link>
              </div>
            </div>

            <div className="dropdown">
              <Nav.Link>Painting</Nav.Link>
              <div className="dropdown-list">
                <Link to="/Painting/Art">Art</Link>
                <Link to="/Painting/Artists">Artists</Link>
              </div>
            </div>

            <div className="dropdown">
              <Nav.Link>Theatrical art</Nav.Link>
              <div className="dropdown-list">
                <Link to="/TheatricalArt/Actors">Actors</Link>
                <Link to="/TheatricalArt/Theaters">Theaters</Link>
              </div>
            </div>

            <div className="dropdown">
              <Nav.Link>Sculpting</Nav.Link>
              <div className="dropdown-list">
                <Link to="/Sculpting/Sculptors">Sculptors</Link>
                <Link to="/Sculpting/Sculpture">Sculpture</Link>
              </div>
            </div>

            <Nav.Item>&nbsp;&nbsp;</Nav.Item>
            <Nav.Link href="https://google.com">About site</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}
