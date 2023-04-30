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
                            <Nav.Link href="/Music">Music</Nav.Link>
                            <div className="dropdown-list">
                                <Nav.Link href="/Guitar">Guitar</Nav.Link>
                                <Nav.Link href="/Piano">Piano</Nav.Link>
                                <Nav.Link href="/Bass">Bass</Nav.Link>
                            </div>
                        </div>
                            
                            
                        <div className="dropdown">
                            <Nav.Link href="/Singing">Singing</Nav.Link>
                            <div className="dropdown-list">
                                <Nav.Link href="/Tembr">Tembr</Nav.Link>
                                <Nav.Link href="/Singers">Singers</Nav.Link>
                            </div>
                        </div>

                        <div className="dropdown">
                            <Nav.Link href="/Painting">Painting</Nav.Link>
                            <div className="dropdown-list">
                                <Nav.Link href="/Art">Art</Nav.Link>
                                <Nav.Link href="/Artists">Artists</Nav.Link>
                            </div>
                        </div>

                        <div className="dropdown">
                            <Nav.Link href="/Theatrical art">Theatrical art</Nav.Link>
                            <div className="dropdown-list">
                                <Nav.Link href="/Actors">Actors</Nav.Link>
                                <Nav.Link href="/Theaters">Theaters</Nav.Link>
                            </div>
                        </div>

                        <div className="dropdown">
                            <Nav.Link href="/Sculpting">Sculpting</Nav.Link>
                            <div className="dropdown-list">
                                <Nav.Link href="/Sculptors">Sculptors</Nav.Link>
                                <Nav.Link href="/Sculpture">Sculpture</Nav.Link>
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
