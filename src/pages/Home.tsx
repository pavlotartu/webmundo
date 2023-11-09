import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Footer from '../components/Footer';
import ScrollButton from '../components/ScrollButton';
import Whatsapp from "../components/Whatsapp"

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
      <main>
        <ScrollButton />
        <video src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fbanner.webm?alt=media&token=f3ac85d1-c3f9-4d3c-a468-aade4636654d&_gl=1*1v2oju2*_ga*MTAxMzIzNzgwMS4xNjk2MDI3OTUw*_ga_CW55HF8NVT*MTY5ODk0MzU4Ny45NS4x.1.0" className="object-fit-contain w-100" autoPlay loop></video>
        <div className="d-flex flex-wrap justify-content-center mt-4">
          <div className="tienda card text-center shadow-lg m-2"
            style={{ width: "18rem" }}
          >
            <div className="card-body ">
              <h5 style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
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
              <h5 style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
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
              <h5 style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
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
              <h5 style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>MEDIOS DE PAGO</strong>
              </h5>
              <p className="card-text" style={{ textAlign: 'justify', fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
                Aquí podras ver todos los medios de pago disponibles, descuentos y promociones.
              </p>
              <a id='como-pagar-button' className="btn btn-primary" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
                Medios de Pagos
              </a>
            </div>
          </div>
        </div>

        <h1 className="text-center my-5" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
          <strong>🤩 NOVEDADES 🤩</strong>
        </h1>

        <div className="row d-flex justify-content-center m-0">
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <div className="card h-100">
              <div
                id="carouselCard1"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2F01banner01.png?alt=media&token=d53398a4-4acf-4f8e-8260-7a06bd1fc62a"
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
                      src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2F01banner02.png?alt=media&token=393feb82-3227-43ef-a247-4f3406f53578"
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
                      src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2F01banner03.png?alt=media&token=a7f68b31-65aa-4834-873c-e526792ddacb"
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
                <h5 className="text-center" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>COTILLON</h5>
                <p className="card-text" style={{ textAlign: 'justify', fontFamily: 'Open Sans, sans-serif', fontWeight: 300, fontStyle: 'italic' }}>
                  Aqui podes ver algunos de los ultimos ingresos en Cotillón.
                  Para poder ver mas productos o realizar una comprar, dirigite
                  a la Tienda.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 my-2">
            <div className="card h-100 ">
              <div
                id="carouselCard2"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2F02banner01.png?alt=media&token=d8836f01-c9ee-4f7d-9b3e-e2f1e8c1c94f"
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
                      src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2F02banner02.png?alt=media&token=35249e75-6d16-4b52-8001-84a3d506e343"
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
                      src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2F02banner03.png?alt=media&token=985e97da-37df-4427-8923-b0ed2784dbfb"
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
                <h5 className="text-center" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>JUGUETES</h5>
                <p className="card-text" style={{ textAlign: 'justify', fontFamily: 'Open Sans, sans-serif', fontWeight: 300, fontStyle: 'italic' }}>
                  Aqui podes ver algunos de los ultimos ingresos en artículos de
                  jugueteria. Para poder ver mas productos o realizar una
                  comprar, dirigite a la Tienda.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 my-2">
            <div className="card h-100 ">
              <div
                id="carouselCard3"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2F03banner01.png?alt=media&token=b79678f9-d3f2-43cc-b5eb-b4c5970c2ab0"
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
                      src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2F03banner02.png?alt=media&token=3acaa395-2cef-4bec-b158-226c95182e70"
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
                      src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2F03banner03.png?alt=media&token=71c92927-86d6-4af8-8997-899bfc03a824"
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
                <h5 className="text-center" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>REGALERIA</h5>
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
              <img src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2F01compra.png?alt=media&token=72639461-f35d-4233-91a3-f36485701c7b" className="d-block img-fluid" alt="01compra" />
            </div>
            <div className="carousel-item">
              <img src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2F02compra.png?alt=media&token=6ad7f913-d3b1-4578-8c4d-991fabcf2edd" className="d-block img-fluid" alt="02compra" />
            </div>
            <div className="carousel-item">
              <img src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2F03compra.png?alt=media&token=5f508714-69e6-43f7-b056-651d1ac63d76" className="d-block img-fluid" alt="03compra" />
            </div>
            <div className="carousel-item">
              <img src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2F04compra.png?alt=media&token=20375965-2d5d-4970-a8d8-88f9cc3e4941" className="d-block img-fluid" alt="04compra" />
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
              <h5 style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>BILLETERA SANTA FE</strong>
              </h5>
              <p className="card-text" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                Reintegro de  30% OFF
              </p>
              <img className="rounded img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2Fbbsf.png?alt=media&token=48be1da2-785b-43cc-a36f-e960ceb17654" alt="bbsf" style={{
                width: "60%",
                height: "200px",
                objectFit: "unset",
              }} onClick={handleBbsfModalShow} />
            </div>
          </div>
          <div className="contacto card text-center shadow-lg m-2" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>MERCADOPAGO</strong>
              </h5>
              <p className="card-text" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>Alias:</strong> mundoaventura.mp
              </p>
              <img
                className="rounded img-thumbnail"
                src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2Fqrmp.png?alt=media&token=a8436523-2800-47d2-9f36-e6ab68c665b2"
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
              <img className="rounded img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2Fbsf.png?alt=media&token=c69d4144-53f6-4c07-b21e-1183ba7a752f" alt="bsf" style={{
                width: "70%",
                height: "50px",
                objectFit: "unset",
              }} />
              <p className="card-text mb-5 mt-3" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>Alias:</strong> mundoaventura.sf
              </p>
              <img className="rounded img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2Fbna.png?alt=media&token=03092a4d-2159-4dce-8eeb-ec6af7edac92" alt="bna" style={{
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
              <h5 style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>TARJETAS DE DEBITO</strong>
              </h5>
              <img className="rounded img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2Fdebito.png?alt=media&token=af8e8d28-7724-4999-9558-aa60b9eafb87" alt="tard" style={{
                width: "80%",
                height: "50px",
                objectFit: "unset",
              }} />
              <h5 className="mt-4" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                <strong>TARJETAS DE CREDITO</strong>
              </h5>
              <img className="rounded img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2Fcredito.png?alt=media&token=a4ed00fd-7034-44d8-b8b9-9b7a0d79c1a9" alt="tarc" style={{
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
              src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2Fbbsf.png?alt=media&token=48be1da2-785b-43cc-a36f-e960ceb17654"
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
              src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2Fqrmp.png?alt=media&token=a8436523-2800-47d2-9f36-e6ab68c665b2"
              alt="qrmp"
              style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }}
            />
          </Modal.Body>
        </Modal>
      </main>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Home;