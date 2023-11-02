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
                                src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Ficon%2Fwhatsapp.png?alt=media&token=1a84b750-a07c-47e3-83a0-88d4061f61a1"
                                alt="Icono 1"
                                className="hover-effect img-fluid m-2"
                                style={{ width: "30px", height: "auto" }} />
                        </a>
                        <a
                            href="https://www.instagram.com/cotillonmundoaventura/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Ficon%2Finstagram.png?alt=media&token=38e1be86-3d4c-4763-a246-b2c8a4686394"
                                alt="Icono 1"
                                className="hover-effect img-fluid m-2"
                                style={{ width: "30px", height: "auto" }} />
                        </a>
                        <a
                            href="https://www.facebook.com/cotillonmundoaventura"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Ficon%2Ffacebook.png?alt=media&token=9c533aa3-62d2-43bc-bd01-fea2f2b20a02"
                                alt="Icono 1"
                                className="hover-effect img-fluid m-2"
                                style={{ width: "30px", height: "auto" }} />
                        </a>
                        <a href="mailto:cotillonmundoaventura@gmail.com">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Ficon%2Fgmail.png?alt=media&token=0a995597-1674-4117-9bab-475a5a535eea"
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