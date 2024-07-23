import React from "react"
import logo from "../assets/logoFinal.jpg"
import '../styles.css'
import { TelephoneFill, Whatsapp, Envelope } from 'react-bootstrap-icons';

export const NavBar = () => {
    return (
        <>
        <nav className="nav1">
        <div>
            <img src={logo} alt=""/>
        </div>
        <ul className="ul1">
            <li><TelephoneFill className="icon"/>011 5263-2076</li>
            <li><Whatsapp className="icon"/>11 3824-5735</li>
            <li><Envelope className="icon"/>lombardi.agustin@tateresa.edu.ar</li>
        </ul>
        </nav>
        </>
    )
}