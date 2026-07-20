import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="navbar">
    <Container>
        <Navbar.Brand>
            🎓 Student Management
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
            <Nav className="ms-auto">
                <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
                <Nav.Link as={NavLink} to={"/"}>Students</Nav.Link>
                <Nav.Link as={NavLink}to={"/add"}>AddStudent</Nav.Link>

            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
    );
}

export default NavbarComponent;