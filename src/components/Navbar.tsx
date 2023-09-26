import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
    return (
        <Navbar className="custom-navbar fixed-top" expand="lg">
            <Container style={{ marginLeft: '1vw' }}>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="./src/assets/img/logomundo.png"
                        alt="Logo"
                        style={{ width: '150px' }}
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                <span style={{ fontSize: '24px' }}>🏠</span> Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/store" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                <span style={{ fontSize: '24px' }}>🏪</span> Tienda
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/contacto" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                <span style={{ fontSize: '24px' }}>📱</span> Contacto
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default CustomNavbar;