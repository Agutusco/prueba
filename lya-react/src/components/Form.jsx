import React from 'react'
import '../styles.css'
import FormContacto from './FormContacto';
import FormTasaciones from './FormTasaciones';
import { useState } from 'react';


const Form = () => {

  const [showContactoForm, setShowContactoForm] = useState(false);
  const [showTasacionesForm, setShowTasacionesForm] = useState(false);

  const toggleContactoForm = () => {
    setShowContactoForm(!showContactoForm);
  };

  const toggleTasacionesForm = () => {
    setShowTasacionesForm(!showTasacionesForm);
  };


  return (
    <section className='seccion-contacto'>
      <FormContacto showForm={showContactoForm} toggleForm={toggleContactoForm}/>
      <FormTasaciones showForm={showTasacionesForm} toggleForm={toggleTasacionesForm}/>
    </section>
  )
}

export default Form