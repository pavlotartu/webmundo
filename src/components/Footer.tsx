

const Footer = () => {
    return (
        <footer className="d-flex bg-dark text-light py-3">

            <div className="container">
                <div className="row">
                    <div>
                        <a
                            href="https://api.whatsapp.com/send?phone=543498404539"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="../src/assets/img/icon/whatsapp.png"
                                alt="Icono 1"
                                className="hover-effect img-fluid m-2"
                                style={{ width: "30px", height: "auto" }}
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/cotillonmundoaventura/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="../src/assets/img/icon/instagram.png"
                                alt="Icono 1"
                                className="hover-effect img-fluid m-2"
                                style={{ width: "30px", height: "auto" }}
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/cotillonmundoaventura"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="../src/assets/img/icon/facebook.png"
                                alt="Icono 1"
                                className="hover-effect img-fluid m-2"
                                style={{ width: "30px", height: "auto" }}
                            />
                        </a>
                        <a href="mailto:cotillonmundoaventura@gmail.com">
                            <img
                                src="../src/assets/img/icon/gmail.png"
                                alt="Icono 1"
                                className="hover-effect img-fluid m-2"
                                style={{ width: "30px", height: "auto" }}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="m-2"><p>@pavlotartu-dev</p></div>
        </footer>
    );
};

export default Footer;
