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
                            <Nav.Link href="/Music">Music</Nav.Link>
                            <Nav.Link href="/Singing">Singing</Nav.Link>
                            <Nav.Link href="/Painting">Painting</Nav.Link>
                            <Nav.Link href="/Theatrical art">Theatrical art</Nav.Link>
                            <Nav.Link href="/Sculpting">Sculpting</Nav.Link>
                            
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