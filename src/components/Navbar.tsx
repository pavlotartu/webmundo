import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
    return (
        <header>
            <Navbar className="custom-navbar fixed-top" expand="lg">
                <Container className='ml-0'>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src="./src/assets/img/logomundo.png"
                            alt="Logo"
                            style={{ width: '250px' }}
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav" className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to="/" className="mr-3 text-center">
                                <div>
                                    <img src="../src/assets/img/home.png" style={{ width: '30px', height: 'auto' }} alt="Home" className="hover-effect" />
                                    <div>Home</div>
                                </div>
                            </Nav.Link>

                            <Nav.Link as={Link} to="/store" className="mr-3 text-center">
                                <div>
                                    <img src="../src/assets/img/tienda.png" style={{ width: '30px', height: 'auto' }} alt="Tienda" className="hover-effect" />
                                    <div>Tienda</div>
                                </div>
                            </Nav.Link>

                            <Nav.Link as={Link} to="/contacto" className="mr-3 text-center">
                                <div>
                                    <img src="../src/assets/img/llamar.png" style={{ width: '30px', height: 'auto' }} alt="Contacto" className="hover-effect" />
                                    <div>Contacto</div>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    );
}

export default CustomNavbar;
