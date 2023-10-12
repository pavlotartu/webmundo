import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Footer from '../components/Footer';


function Home() {

  const [showBbsfModal, setShowBbsfModal] = useState(false);
  const [showMercadoPagoModal, setShowMercadoPagoModal] = useState(false);

  const handleBbsfModalShow = () => {
    setShowBbsfModal(true);
  };

  const handleBbsfModalClose = () => {
    setShowBbsfModal(false);
  };

  const handleMercadoPagoModalShow = () => {
    setShowMercadoPagoModal(true);
  };

  const handleMercadoPagoModalClose = () => {
    setShowMercadoPagoModal(false);
  };

  useEffect(() => {
    const scrollToComoRealizarPedido = () => {
      const comoRealizarPedidoSection = document.getElementById('comoComprar');
      if (comoRealizarPedidoSection) {
        comoRealizarPedidoSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const comoComprarButton = document.getElementById('como-comprar-button');
    if (comoComprarButton) {
      comoComprarButton.addEventListener('click', scrollToComoRealizarPedido);
    }
  }, []);

  useEffect(() => {
    const scrollToComoRealizarPedido = () => {
      const comoPagar = document.getElementById('medioPago');
      if (comoPagar) {
        comoPagar.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const mediosPago = document.getElementById('como-pagar-button');
    if (mediosPago) {
      mediosPago.addEventListener('click', scrollToComoRealizarPedido);
    }
  }, []);

  return (
    <>
      <header>
        <div className="carousel-container mt-2">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="../src/assets/img/slider01.png"
                  className="img-fluid d-block mx-auto custom-img"
                  alt=" img01"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../src/assets/img/slider02.png"
                  className="img-fluid d-block mx-auto custom-img"
                  alt=" img02"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../src/assets/img/slider03.png"
                  className="img-fluid d-block mx-auto custom-img"
                  alt=" img03"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../src/assets/img/slider04.png"
                  className="img-fluid d-block mx-auto custom-img"
                  alt=" img04"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../src/assets/img/slider05.png"
                  className="img-fluid d-block mx-auto custom-img"
                  alt=" img05"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev custom-carousel-control"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon custom-carousel-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next custom-carousel-control"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon custom-carousel-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="d-flex flex-wrap justify-content-center m-5">
          <div className="tienda card text-center shadow-lg m-2"
            style={{ width: "18rem" }}
          >
            <div className="card-body ">
              <h5 className="card-title" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>TIENDA ONLINE</strong>
              </h5>
              <p className="card-text" style={{ textAlign: 'justify', fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
                Ingresando podras ver y realizar pedidos de los articulos que
                mas te gusten.
              </p>
              <Link to="/store" className="btn btn-primary" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
                Tienda Online
              </Link>
            </div>
          </div>
          <div
            className="contacto card text-center shadow-lg m-2"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>MEDIOS DE CONTACTO</strong>
              </h5>
              <p className="card-text" style={{ textAlign: 'justify', fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
                Ingresando podras ver todos los medios de contactos para
                cualquier consulta que necesites.
              </p>
              <Link to="/contacto" className="btn btn-primary" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
                Contacto
              </Link>
            </div>
          </div>
          <div className="pagos card text-center shadow-lg m-2" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>¿COMO COMPRAR?</strong>
              </h5>
              <p className="card-text" style={{ textAlign: 'justify', fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
                Aquí podrás ver un instructivo de cómo realizar un pedido y realizar cambios.
              </p>
              <button id="como-comprar-button" className="btn btn-primary" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
                ¿Como Comprar?
              </button>
            </div>
          </div>
          <div
            className="transportes card text-center shadow-lg m-2"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>MEDIOS DE PAGO</strong>
              </h5>
              <p className="card-text" style={{ textAlign: 'justify', fontFamily: 'Open Sans, sans-serif', fontWeight: 300, fontStyle: 'italic' }}>
                Aquí podras ver todos los medios de pago disponibles, descuentos y promociones.
              </p>
              <a id='como-pagar-button' className="btn btn-primary" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
                Medios de Pagos
              </a>
            </div>
          </div>
        </div>

        <h1 className="text-center m-5" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
          <strong>🤩 NOVEDADES 🤩</strong>
        </h1>

        <div className="row row-col-1 row-col-md-3  m-2">
          <div className="col m-2 ">
            <div className="card h-100">
              <div
                id="carouselCard1"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="./src/assets/img/news/01banner01.png"
                      className="d-block w-100"
                      alt="Imagen 1-1"
                      style={{
                        width: "32vw",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./src/assets/img/news/01banner02.png"
                      className="d-block w-100"
                      alt="Imagen 1-2"
                      style={{
                        width: "32vw",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./src/assets/img/news/01banner03.png"
                      className="d-block w-100"
                      alt="Imagen 1-3"
                      style={{
                        width: "32vw",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselCard1"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselCard1"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
              <div className="card-body shadow-lg">
                <h5 className="card-title text-center" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>COTILLON</h5>
                <p className="card-text" style={{ textAlign: 'justify', fontFamily: 'Open Sans, sans-serif', fontWeight: 300, fontStyle: 'italic' }}>
                  Aqui podes ver algunos de los ultimos ingresos en Cotillón.
                  Para poder ver mas productos o realizar una comprar, dirigite
                  a la Tienda.
                </p>
              </div>
            </div>
          </div>

          <div className="col m-2">
            <div className="card h-100 ">
              <div
                id="carouselCard2"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="./src/assets/img/news/02banner01.png"
                      className="d-block w-100"
                      alt="Imagen 2-1"
                      style={{
                        width: "32vw",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./src/assets/img/news/02banner02.png"
                      className="d-block w-100"
                      alt="Imagen 2-2"
                      style={{
                        width: "32vw",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./src/assets/img/news/02banner03.png"
                      className="d-block w-100"
                      alt="Imagen 2-3"
                      style={{
                        width: "32vw",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselCard2"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselCard2"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
              <div className="card-body shadow-lg">
                <h5 className="card-title text-center" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>JUGUETES</h5>
                <p className="card-text" style={{ textAlign: 'justify', fontFamily: 'Open Sans, sans-serif', fontWeight: 300, fontStyle: 'italic' }}>
                  Aqui podes ver algunos de los ultimos ingresos en artículos de
                  jugueteria. Para poder ver mas productos o realizar una
                  comprar, dirigite a la Tienda.
                </p>
              </div>
            </div>
          </div>

          <div className="col m-2">
            <div className="card h-100 ">
              <div
                id="carouselCard3"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="./src/assets/img/news/03banner01.png"
                      className="d-block w-100"
                      alt="Imagen 3-1"
                      style={{
                        width: "32vw",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./src/assets/img/news/03banner02.png"
                      className="d-block w-100"
                      alt="Imagen 3-2"
                      style={{
                        width: "32vw",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./src/assets/img/news/03banner03.png"
                      className="d-block w-100"
                      alt="Imagen 3-3"
                      style={{
                        width: "32vw",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselCard3"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselCard3"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
              <div className="card-body shadow-lg">
                <h5 className="card-title text-center" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>REGALERIA</h5>
                <p className="card-text" style={{ textAlign: 'justify', fontFamily: 'Open Sans, sans-serif', fontWeight: 300, fontStyle: 'italic' }}>
                  Aqui podes ver algunos de los ultimos ingresos en artículos de
                  regaleria. Para poder ver mas productos o realizar una
                  comprar, dirigite a la Tienda.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1 id="comoComprar" className="text-center mt-5" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
          <strong>🛒 ¿COMO REALIZAR UN PEDIDO? 🛒</strong>
        </h1>

        <div id="carouselExampleCaptions" className="carousel slide w-75 m-3 mx-auto">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./src/assets/img/news/01compra.png" className="d-block img-fluid" alt="01compra" />
            </div>
            <div className="carousel-item">
              <img src="./src/assets/img/news/02compra.png" className="d-block img-fluid" alt="02compra" />
            </div>
            <div className="carousel-item">
              <img src="./src/assets/img/news/03compra.png" className="d-block img-fluid" alt="03compra" />
            </div>
            <div className="carousel-item">
              <img src="./src/assets/img/news/04compra.png" className="d-block img-fluid" alt="04compra" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <h1 id='medioPago' className="text-center mt-5" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
          <strong>💲 MEDIOS DE PAGO 💲</strong>
        </h1>

        <div className="d-flex flex-wrap justify-content-center mb-4">
          <div className="tienda card text-center shadow-lg m-2"
            style={{ width: "18rem" }}
          >
            <div className="card-body ">
              <h5 className="card-title" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>BILLETERA SANTA FE</strong>
              </h5>
              <p className="card-text" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                Reintegro de  30% OFF
              </p>
              <img className="rounded img-thumbnail" src="./src/assets/img/news/bbsf.png" alt="bbsf" style={{
                width: "60%",
                height: "200px",
                objectFit: "unset",
              }} onClick={handleBbsfModalShow} />
            </div>
          </div>
          <div className="contacto card text-center shadow-lg m-2" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>MERCADOPAGO</strong>
              </h5>
              <p className="card-text" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>Alias:</strong> mundoaventura.mp
              </p>
              <img
                className="rounded img-thumbnail"
                src="./src/assets/img/news/qrmp.png"
                alt="qrmp"
                style={{
                  width: "60%",
                  height: "200px",
                  objectFit: "unset",
                }}
                onClick={handleMercadoPagoModalShow}
              />
            </div>
          </div>
          <div className="pagos card text-center shadow-lg m-2" style={{ width: "18rem" }}>
            <div className="card-body">
              <img className="rounded img-thumbnail" src="./src/assets/img/news/bsf.png" alt="bsf" style={{
                width: "70%",
                height: "50px",
                objectFit: "unset",
              }} />
              <p className="card-text mb-5 mt-3" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>Alias:</strong> mundoaventura.sf
              </p>
              <img className="rounded img-thumbnail" src="./src/assets/img/news/bna.png" alt="bna" style={{
                width: "70%",
                height: "50px",
                objectFit: "unset",
              }} />
              <p className="card-text mt-3" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>Alias:</strong> mundoaventura.bn
              </p>

            </div>
          </div>
          <div
            className="transportes card text-center shadow-lg m-2"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>TARJETAS DE DEBITO</strong>
              </h5>
              <img className="rounded img-thumbnail" src="./src/assets/img/news/debito.png" alt="bsf" style={{
                width: "80%",
                height: "50px",
                objectFit: "unset",
              }} />
              <h5 className="card-title mt-4" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>TARJETAS DE CREDITO</strong>
              </h5>
              <img className="rounded img-thumbnail" src="./src/assets/img/news/credito.png" alt="bsf" style={{
                width: "80%",
                height: "120px",
                objectFit: "unset",
              }} />
            </div>
          </div>
        </div>

        <Modal show={showBbsfModal} onHide={handleBbsfModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>QR BILLETERA SANTA FE</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ textAlign: 'center' }}>
            <img
              className="rounded img-thumbnail"
              src="./src/assets/img/news/bbsf.png"
              alt="bsf"
              style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }}
            />
          </Modal.Body>
        </Modal>

        <Modal show={showMercadoPagoModal} onHide={handleMercadoPagoModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>QR MERCADOPAGO</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ textAlign: 'center' }}>
            <img
              className="rounded img-thumbnail"
              src="./src/assets/img/news/qrmp.png"
              alt="qrmp"
              style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }}
            />
          </Modal.Body>
        </Modal>

      </main>
      <Footer />
    </>
  );
}

export default Home;
