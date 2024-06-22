import React from 'react'
import '../styles.css'
import { House } from 'react-bootstrap-icons'

const FormTasaciones = ({ showForm, toggleForm}) => {
  return (
    <div className="form-container-tasaciones">
        <div className="icono" id="icono2" onClick={toggleForm}>
            <House id='house'/>
                <h2>Tasaciones</h2>
            </div>
            <div id="tasacionesForm" className={`form-tasaciones ${showForm ? 'mostrar' : 'ocultar'}`}>
                <form method="post" id="tasaciones-form" >
                    <p className={`titulo-form ocultar`}>Formulario de Tasaciones</p>
                    <div>
                        <input type="text" name="nombre" id="nombre" placeholder="Nombre" required/>
                    </div>
                    <div>
                        <input type="tel" name="tel" id="tel" placeholder="Teléfono" required/>
                    </div>
                    <div>
                        <input type="tel" name="cel" id="cel" placeholder="Celular" required/>
                    </div>
                    <div>
                        <input type="email" name="email" id="email" placeholder="E-mail" required/>
                    </div>
                    <div>
                        <textarea name="mensaje" id="mensaje" placeholder="Mensaje" required></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Enviar"/>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default FormTasaciones