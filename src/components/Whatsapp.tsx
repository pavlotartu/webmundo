const ContactButton = () => {
  return (
    <div className="position-fixed bottom-0 end-0 py-3 px-2">
      <a
        className="mb-2"
        href="https://api.whatsapp.com/send?phone=543498404539"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Ficon%2Fwhatsapp.png?alt=media&token=782771cf-5cfc-44ea-acf9-e697c6dc642c"
          alt="WhatsApp"
          style={{ width: "40px", height: "auto", opacity: 0.7 }}
          className="hover-effect"
        />
      </a>
    </div>
  );
};

export default ContactButton;
