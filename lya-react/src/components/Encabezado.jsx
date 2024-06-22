import { NavBar } from "./NavBar"
import '../styles.css'
import { NavLink } from 'react-router-dom'

export const Encabezado = () => {
    return (
        <>
        <NavBar />
        <hr />
        <nav>
            <div className="menu-toggle">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </div>
        <ul className="ul-container">
            <li><p><a href="https://www.argenprop.com/lombardi-y-asociados" target="_blank">Propiedades</a></p></li>
            <li><p><a href="#icono1">Contacto</a></p></li>
            <li><p><a href="#icono2">Tasaciones</a></p></li>
        </ul>
        </nav>
        </>
    ) 

}