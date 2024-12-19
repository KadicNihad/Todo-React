import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
            <Container fluid className="text-center">
                <Navbar.Brand as={Link} to="/">MyBrand</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-collapse" />
                <Navbar.Collapse id="navbar-collapse">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/tasks" className="text-light">
                            Tasks
                        </Nav.Link>
                        <Nav.Link as={Link} to="/account" className="text-light">
                            Account
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/login" className="text-light">
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
