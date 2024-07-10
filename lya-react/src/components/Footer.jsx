import React from 'react'
import '../styles.css'
import { TelephoneFill, Whatsapp, Envelope, GeoAlt } from 'react-bootstrap-icons';

const Footer = () => {
return (
    <footer>
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399.3616502471191!2d-58.51234358823979!3d-34.48993505747101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb053892a9531%3A0x7b0a1326d2ae51d9!2sLombardi%20y%20Asociados!5e0!3m2!1ses-419!2sar!4v1719060792220!5m2!1ses-419!2sar" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>       
        </div>
        <div className="div-footer">
            <div className="div-contacto">
                <h3>Contacto</h3>
                <ul className="ul-footer">
                    <li><TelephoneFill className="icon"/>5263-2076</li>
                    <li><Whatsapp className="icon"/>11 3824-5735</li>
                    <li><Envelope className="icon"/>lombardi.agustin@tateresa.edu.ar</li>
                </ul>
            </div>
            <div className="ubicacion">
                <h3>Ubicación</h3>
                <p><GeoAlt className="icon"/>Saenz Valiente 799, Martínez</p>
            </div>
        </div>
        <div className="div-info">
            <h3>Información</h3>
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga beatae veniam ullam excepturi explicabo, totam ad maxime, aut neque cum voluptates qui reprehenderit facilis sit doloremque dignissimos error. Id, molestias?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci suscipit eligendi eveniet inventore ratione perspiciatis odio hic repellendus quam nam, ipsam ducimus reprehenderit, excepturi laudantium pariatur dolorem, maiores illo id.</p>
            </div>
        </div>
    </footer>
)
}

export default Footer