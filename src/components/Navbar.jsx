import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">MyWebsite</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
                            <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
                            <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#login">Login</Nav.Link>
                        <Nav.Link href="#signup">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
