import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="info" variant="info" expand="lg" className="px-3">
            <Container fluid className="text-center">
                <Navbar.Brand as={Link} to="/tasks">MyBrand</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-collapse" />
                <Navbar.Collapse id="navbar-collapse">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/tasks" className="text-dark">
                            Tasks
                        </Nav.Link>
                        <Nav.Link as={Link} to="/account" className="text-dark">
                            Account
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/login" className="text-dark">
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
