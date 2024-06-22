import './App.css'
import { Encabezado }  from './components/Encabezado'
import Carousel   from './components/Carousel'
import  Publicidad from './components/Publicidad'
import Form from './components/Form'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {

  return (
    <>
    <Router/>
      <Encabezado/>
      <Carousel/>
      <Publicidad/>
      <Form/>
      <Footer/>
    <Router/>
    </>
  )
}

export default App
