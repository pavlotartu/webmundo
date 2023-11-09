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
            <Navbar className="custom-navbar fixed-top position-top" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className='logo_menu border-0' src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Ficon%2Flogomundo.png?alt=media&token=7fd40388-ac85-4d2c-9b1c-6a0dafae6f26" alt="Logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav" className="justify-content-end">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/" className={`mr-3 text-center ${isHomeActive ? 'active' : ''}`}>
                                    <div style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Ficon%2Fhome.png?alt=media&token=43fef7f8-7099-4109-9325-65be1bce211e"
                                            style={{ width: '25px', height: 'auto', color: isHomeActive ? 'blue' : 'black' }}
                                            alt="Home"
                                            className="hover-effect"
                                        />
                                        <div style={{ color: isHomeActive ? '#0d6efd' : 'black', fontWeight: isHomeActive ? 'bold' : 'normal' }}> <strong>Home</strong></div>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/store" className={`mr-3 text-center ${isStoreActive ? 'active' : ''}`}>
                                    <div style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Ficon%2Ftienda.png?alt=media&token=704efe1e-4b05-4d5c-951c-15301ad3adcf"
                                            style={{ width: '25px', height: 'auto', color: isStoreActive ? 'blue' : 'black' }}
                                            alt="Tienda"
                                            className="hover-effect"
                                        />
                                        <div style={{ color: isStoreActive ? '#0d6efd' : 'black', fontWeight: isStoreActive ? 'bold' : 'normal' }}><strong>Tienda</strong></div>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/contacto" className={`mr-3 text-center ${isContactoActive ? 'active' : ''}`}>
                                    <div style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Ficon%2Fllamar.png?alt=media&token=4ce78f8a-e6a5-4010-a928-1b3604036c56"
                                            style={{ width: '25px', height: 'auto', color: isContactoActive ? 'blue' : 'black' }}
                                            alt="Contacto"
                                            className="hover-effect"
                                        />
                                        <div style={{ color: isContactoActive ? '#0d6efd' : 'black', fontWeight: isContactoActive ? 'bold' : 'normal' }}> <strong>Contacto</strong></div>
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