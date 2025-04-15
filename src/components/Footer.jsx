import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <nav className="footer-nav">
            <a href="#Hero">INICIO</a>
            <a href="#about">SOBRE NOSOTROS</a>
            <a href="#ContactForm">CONTACTO</a>
          </nav>
          <p className="footer-copy">&copy; 2025 - URIBE ALEXIADES SAS</p>
        </div>

        <div className="footer-right">
          <p>
            Cuidamos del paciente profesando <br />
            siempre respeto por su voluntad, <br />
            su autonomía y sus costumbres.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

