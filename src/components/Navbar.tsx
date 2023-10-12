import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
    const location = useLocation();
    const isHomeActive = location.pathname === '/';
    const isStoreActive = location.pathname === '/store';
    const isContactoActive = location.pathname === '/contacto';

    return (

        <header>
            <Navbar bg="white" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className='logo_menu' src="./src/assets/img/icon/logomundo.png" alt="Logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav" className="justify-content-end">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/" className={`mr-3 text-center ${isHomeActive ? 'active' : ''}`}>
                                    <div style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                                        <img
                                            src="../src/assets/img/icon/home.png"
                                            style={{ width: '30px', height: 'auto', color: isHomeActive ? 'blue' : 'black' }}
                                            alt="Home"
                                            className="hover-effect"
                                        />
                                        <div style={{ color: isHomeActive ? '#779fc5' : 'black', fontWeight: isHomeActive ? 'bold' : 'normal' }}> <strong>Home</strong></div>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/store" className={`mr-3 text-center ${isStoreActive ? 'active' : ''}`}>
                                    <div style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                                        <img
                                            src="../src/assets/img/icon/tienda.png"
                                            style={{ width: '30px', height: 'auto', color: isStoreActive ? 'blue' : 'black' }}
                                            alt="Tienda"
                                            className="hover-effect"
                                        />
                                        <div style={{ color: isStoreActive ? '#779fc5' : 'black', fontWeight: isStoreActive ? 'bold' : 'normal' }}><strong>Tienda</strong></div>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/contacto" className={`mr-3 text-center ${isContactoActive ? 'active' : ''}`}>
                                    <div style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                                        <img
                                            src="../src/assets/img/icon/llamar.png"
                                            style={{ width: '30px', height: 'auto', color: isContactoActive ? 'blue' : 'black' }}
                                            alt="Contacto"
                                            className="hover-effect"
                                        />
                                        <div style={{ color: isContactoActive ? '#779fc5' : 'black', fontWeight: isContactoActive ? 'bold' : 'normal' }}> <strong>Contacto</strong></div>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default CustomNavbar;