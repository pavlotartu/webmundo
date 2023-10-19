const Footer = () => {
    return (
        <footer className="d-flex bg-dark text-light py-3">
            <div className="container d-flex justify-content-between">
                <div className="row ">
                    <div>
                        <a
                            href="https://api.whatsapp.com/send?phone=543498404539"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                src="../src/assets/img/icon/whatsapp.png"
                                alt="Icono 1"
                                className="hover-effect img-fluid m-2"
                                style={{ width: "30px", height: "auto" }} />
                        </a>
                        <a
                            href="https://www.instagram.com/cotillonmundoaventura/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                src="../src/assets/img/icon/instagram.png"
                                alt="Icono 1"
                                className="hover-effect img-fluid m-2"
                                style={{ width: "30px", height: "auto" }} />
                        </a>
                        <a
                            href="https://www.facebook.com/cotillonmundoaventura"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                src="../src/assets/img/icon/facebook.png"
                                alt="Icono 1"
                                className="hover-effect img-fluid m-2"
                                style={{ width: "30px", height: "auto" }} />
                        </a>
                        <a href="mailto:cotillonmundoaventura@gmail.com">
                            <img
                                src="../src/assets/img/icon/gmail.png"
                                alt="Icono 1"
                                className="hover-effect img-fluid m-2"
                                style={{ width: "30px", height: "auto" }} />
                        </a>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <p className="text-center m-0">*** LOS PRECIOS PUEDEN VARIAR SIN PREVIO AVISO - ENTREGA SUJETA A DISPONIBILIDAD EN STOCK ***</p>
                    <p className="text-center m-0">*** 9 DE JULIO 1764 - SAN JUSTO SF 3498-404539 ***</p>
                </div>

            </div>

        </footer>
    );
};

export default Footer;