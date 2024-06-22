import React from 'react'
import '../styles.css'
import { EnvelopeOpen } from 'react-bootstrap-icons'

const FormContacto = ({ showForm, toggleForm }) => {
  return (
    <div className="form-container-contacto">
        <div className="icono" id="icono1" onClick={toggleForm}>
            <EnvelopeOpen id='envelope'/>
                <h2>Contacto</h2>
            </div>
            <div className= {`form-contacto ${showForm ? 'mostrar' : 'ocultar'}`} id="contactoForm">
                <form action="" >
                    <p className="titulo-form ocultar">Formulario de Contacto</p>
                    <div>
                        <input type="text" name="nombre" id="" placeholder="Nombre"/>
                    </div>
                    <div>
                        <input type="tel" name="tel" id="" placeholder="Teléfono"/>
                    </div>
                    <div>
                        <input type="tel" name="" id="" placeholder="Celular"/>
                    </div>
                    <div>
                        <input type="email" name="" id="" placeholder="E-mail"/>
                    </div>
                    <div>
                        <textarea name="mensaje" id="" placeholder="Mensaje"></textarea>
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