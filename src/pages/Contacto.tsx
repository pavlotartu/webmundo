import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function Contacto() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 627);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const iframeStyles = {
    border: "0",
    minWidth: "250px",
    width: isDesktop ? "600px" : "250px",
    height: isDesktop ? "500px" : "250px",
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="d-flex flex-wrap justify-content-center m-2">
            <div
              className="tienda card text-center m-2"
              style={{ width: "18rem" }}
            >
              <div className="card-body shadow-lg">
                <h5 className="card-title" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                  <strong>WHATSAPP</strong>
                </h5>
                <a
                  href="https://api.whatsapp.com/send?phone=543498404539"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./src/assets/img/icon/whatsapp.png"
                    alt="Icono 1"
                    className="hover-effect img-fluid m-2 "
                    style={{ width: "50px", height: "auto" }}
                  />
                </a>
                <h6 className="card-title" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>(0) 3498 - (15) 404539</h6>
                <h6 className="card-title" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>Y sigue nuestros estados</h6>
              </div>
            </div>
            <div
              className="contacto card text-center m-2 shadow-lg"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                  <strong>INSTAGRAM</strong>
                </h5>
                <a
                  href="https://www.instagram.com/cotillonmundoaventura/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./src/assets/img/icon/instagram.png"
                    alt="Icono 1"
                    className="hover-effect img-fluid m-2"
                    style={{ width: "50px", height: "auto" }}
                  />
                  <strong>www.instagram.com/cotillonmundoaventura</strong>
                </a>
                <h6 className="card-title" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 300, fontStyle: 'italic' }}>#️⃣cotillonmundoaventura</h6>
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-center m-2">
            <div
              className="pagos card text-center m-2 shadow-lg"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                  <strong>FACEBOOK</strong>
                </h5>
                <a
                  href="https://www.facebook.com/cotillonmundoaventura"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}
                >
                  <img
                    src="./src/assets/img/icon/facebook.png"
                    alt="Icono 1"
                    className="hover-effect img-fluid m-2"
                    style={{ width: "50px", height: "auto" }}
                  />
                  <strong>www.facebook.com/cotillonmundoaventura</strong>
                </a>
                <h6 className="card-title" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 300, fontStyle: 'italic' }}>#️⃣cotillonmundoaventura</h6>
              </div>
            </div>

            <div
              className="transportes card text-center m-2 shadow-lg"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                  <strong>EMAIL</strong>
                </h5>
                <a href="mailto:cotillonmundoaventura@gmail.com" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 300, fontStyle: 'italic' }}>
                  <img
                    src="./src/assets/img/icon/gmail.png"
                    alt="Icono 1"
                    className="hover-effect img-fluid m-2"
                    style={{ width: "50px", height: "auto" }}
                  />
                </a>
                <a href="mailto:cotillonmundoaventura@gmail.com" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
                  <strong>cotillonmundoaventura@gmail.com</strong>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`map mb-5 mt-5 d-flex flex-column align-items-center ${isDesktop ? "map-desktop" : ""
            }`}
        >
          <h3 className="text-center" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}><strong>Cotillón Mundo Aventura</strong></h3>
          <h6 className="text-center" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 300, fontStyle: 'italic' }}>9 de Julio 1764 - San Justo (SF)</h6>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13709.766716366696!2d-60.5823471!3d-30.7902459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944ad7a1b510c147%3A0x74894eb75b0033c!2sCotill%C3%B3n%20Mundo%20Aventura!5e0!3m2!1ses-419!2sar!4v1696624455775!5m2!1ses-419!2sar"
            style={iframeStyles}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-lg"
          ></iframe>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contacto;
