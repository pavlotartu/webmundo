import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
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
        <div className="d-flex flex-wrap justify-content-center m-2">
          <div
            className="tienda card text-center m-2"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <strong>TIENDA ONLINE</strong>
              </h5>
              <p className="card-text">
                Ingresando podras ver y realizar pedidos de los articulos que
                mas te gusten.
              </p>
              <Link to="/store" className="btn btn-primary">
                Ir a Tienda Online
              </Link>
            </div>
          </div>
          <div
            className="contacto card text-center m-2"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <strong>MEDIOS DE CONTACTO</strong>
              </h5>
              <p className="card-text">
                Ingresando podras ver todos los medios de contactos para
                cualquier consulta que necesites.
              </p>
              <Link to="/contacto" className="btn btn-primary">
                Ir a Contacto
              </Link>
            </div>
          </div>
          <div
            className="pagos card text-center m-2"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <strong>MEDIOS DE PAGO</strong>
              </h5>
              <p className="card-text">
                Aquí podras ver todos los medios de pago disponibles y sus
                descuentos.
              </p>
              <a href="#" className="btn btn-primary">
                Ver Medios de Pagos
              </a>
            </div>
          </div>
          <div
            className="transportes card text-center m-2"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <strong>MEDIOS DE TRANSPORTE</strong>
              </h5>
              <p className="card-text">
                Ingresando podras ver los distintos medios de transportes segun
                localidad.
              </p>
              <a href="#" className="btn btn-primary">
                Ver Medios de Transportes
              </a>
            </div>
          </div>
        </div>

        <h1 className="text-center m-5">
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
              <div className="card-body">
                <h5 className="card-title">COTILLON</h5>
                <p className="card-text" style={{ textAlign: 'justify' }}>
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
              <div className="card-body">
                <h5 className="card-title">JUGUETES</h5>
                <p className="card-text" style={{ textAlign: 'justify' }}>
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
              <div className="card-body">
                <h5 className="card-title">REGALERIA</h5>
                <p className="card-text" style={{ textAlign: 'justify' }}>
                  Aqui podes ver algunos de los ultimos ingresos en artículos de
                  regaleria. Para poder ver mas productos o realizar una
                  comprar, dirigite a la Tienda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
