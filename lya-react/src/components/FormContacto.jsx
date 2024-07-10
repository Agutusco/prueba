import { useRef } from 'react';
import '../styles.css'
import { EnvelopeOpen } from 'react-bootstrap-icons'
import emailjs from '@emailjs/browser';



const FormContacto = ({ showForm, toggleForm }) => {
        const form = useRef();
        const sendEmailContact = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_kgu2igo', 'template_ruys43b', form.current, {
            publicKey: '-G6cLMmb8nxuylG2A',
            })
            .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
            );
        }
    return (
        <div className="form-container-contacto">
            <div className="icono" id="icono1" onClick={toggleForm}>
                <EnvelopeOpen id='envelope'/>
                    <h2>Contacto</h2>
                </div>
                <div className= {`form-contacto ${showForm ? 'mostrar' : 'ocultar'}`} id="contactoForm">
                    <form ref={form} onSubmit={sendEmailContact}>
                        <p className="titulo-form ocultar">Formulario de Contacto</p>
                        <div>
                            <input type="text" name="user_name" placeholder="Nombre"/>
                        </div>
                        <div>
                            <input type="tel" name="tel" placeholder="Teléfono"/>
                        </div>
                        <div>
                            <input type="tel" name="cellphone" placeholder="Celular"/>
                        </div>
                        <div>
                            <input type="email" name="email_user" placeholder="E-mail"/>
                        </div>
                        <div>
                            <textarea name="message" placeholder="Mensaje"></textarea>
                        </div>
                        <div>
                            <input type="submit" name="submit" value="Enviar"/>
                        </div>
                    </form>
                </div>
        </div>
    )
    }

export default FormContacto