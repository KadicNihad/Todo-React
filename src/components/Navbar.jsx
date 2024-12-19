import {Navbar, Nav, Container} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
            <Container fluid className='text-center'>
                <Navbar.Brand href="#home">MyBrand</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-collapse"/>
                <Navbar.Collapse id="navbar-collapse">
                    <Nav className="ms-auto">
                        <Nav.Link href="#tasks" className="text-light">
                            Tasks
                        </Nav.Link>
                        <Nav.Link href="#account" className="text-light">
                            Account
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link href="#logout" className="text-light">
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
