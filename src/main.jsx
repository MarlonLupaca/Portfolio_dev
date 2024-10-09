import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import Cabecera from './componentes/Cabecera'
import Cuerpo from './componentes/Cuerpo'
import Footer from './componentes/Footer'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cabecera/>
    <Cuerpo/>
    <Footer/>
  </React.StrictMode>,
)



