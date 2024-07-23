import React, { useRef } from 'react';
import '../styles.css';
import { House } from 'react-bootstrap-icons';
import emailjs from '@emailjs/browser';



const FormTasaciones = ({ showForm, toggleForm }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_llt3izp', 'template_xsv53pc', form.current, {
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
  };
  return (
    <div className="form-container-tasaciones">
      <div className="icono" id="icono2" onClick={toggleForm}>
        <House id='house'/>
        <h2>Tasaciones</h2>
      </div>
      <div id="tasacionesForm" className={`form-tasaciones ${showForm ? 'mostrar' : 'ocultar'}`}>
        <form id="tasaciones-form" ref={form} onSubmit={sendEmail}>
          <p className={`titulo-form ocultar`}>Formulario de Tasaciones</p>
          <div>
            <input type="text" name="user_name" placeholder="Nombre" required/>
          </div>
          <div>
            <input type="tel" name="tel" placeholder="Teléfono" required/>
          </div>
          <div>
            <input type="tel" name="cellphone" placeholder="Celular" required/>
          </div>
          <div>
            <input type="email" name="user_email" placeholder="E-mail" required/>
          </div>
          <div>
            <textarea name="message" placeholder="Mensaje" required></textarea>
          </div>
          <div>
            <input type="submit" value="Enviar"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormTasaciones;