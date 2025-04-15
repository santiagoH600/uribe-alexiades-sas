import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="">
            <nav className="header_bar1">
                <div className="header_bar">

                        {/* Título */}
                    <h1 id="header_name" className="header_name ">
                        <p>URIBE ALEXIADES</p>
                        <p className="">SERVICIOS ESPECIALES SAS</p>
                    </h1>

                    {/* Botón hamburguesa */}
                    <button
                        className="hamburger"
                        onClick={toggleMenu}
                        aria-label="Menú"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>

                </div>

                {/* Menú de navegación */}
                <ul className={`nav_links ${isOpen ? "open" : "closed"}`}>
                    <li>
                        <a href="#Hero" className="option " onClick={closeMenu}>
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="option " onClick={closeMenu}>
                            Sobre nosotros
                        </a>
                    </li>
                    <li>
                        <a href="#ContactForm" className="option " onClick={closeMenu}>
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;



