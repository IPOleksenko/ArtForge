import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from './logo.svg'

export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <svg width="30" height="30" viewBox="0 0 30 30" className="d-inline-block align-top" alt="Logo">
                            <image xlinkHref={logo} width="30" height="30" />
                        </svg>
                        ArtForge
                    </Navbar.Brand >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse  id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <div className="dropdown">
                            <Nav.Link>Music</Nav.Link>
                            <div className="dropdown-list">
                                <Nav.Link href="/Music/Guitar">Guitar</Nav.Link>
                                <Nav.Link href="/Music/Piano">Piano</Nav.Link>
                                <Nav.Link href="/Music/Bass">Bass</Nav.Link>
                            </div>
                        </div>
                            
                        <div className="dropdown">
                            <Nav.Link>Singing</Nav.Link>
                            <div className="dropdown-list">
                                <Nav.Link href="/Singing/Tembr">Tembr</Nav.Link>
                                <Nav.Link href="/Singing/Singers">Singers</Nav.Link>
                            </div>
                        </div>

                        <div className="dropdown">
                            <Nav.Link>Painting</Nav.Link>
                            <div className="dropdown-list">
                                <Nav.Link href="/Painting/Art">Art</Nav.Link>
                                <Nav.Link href="/Painting/Artists">Artists</Nav.Link>
                            </div>
                        </div>

                        <div className="dropdown">
                            <Nav.Link>Theatrical art</Nav.Link>
                            <div className="dropdown-list">
                                <Nav.Link href="/TheatricalArt/Actors">Actors</Nav.Link>
                                <Nav.Link href="/TheatricalArt/Theaters">Theaters</Nav.Link>
                            </div>
                        </div>

                        <div className="dropdown">
                            <Nav.Link>Sculpting</Nav.Link>
                            <div className="dropdown-list">
                                <Nav.Link href="/Sculpting/Sculptors">Sculptors</Nav.Link>
                                <Nav.Link href="/Sculpting/Sculpture">Sculpture</Nav.Link>
                            </div>
                        </div>                            
                            
                            <Nav.Item>&nbsp;&nbsp;</Nav.Item>
                            <Nav.Link href="/Info">About site</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
            </Navbar>
            </>
        )
    }
}
