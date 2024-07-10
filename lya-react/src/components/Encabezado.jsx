import React, { useState } from 'react';
import { NavBar } from "./NavBar";
import '../styles.css';

export const Encabezado = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <NavBar />
            <hr />
            <nav>
                <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`ul-container ${isMenuOpen ? 'show' : ''}`}>
                    <li><p><a href="https://www.argenprop.com/lombardi-y-asociados" target="_blank" rel="noopener noreferrer">Propiedades</a></p></li>
                    <li><p><a href="#icono1">Contacto</a></p></li>
                    <li><p><a href="#icono2">Tasaciones</a></p></li>
                </ul>
            </nav>
        </>
    );
};