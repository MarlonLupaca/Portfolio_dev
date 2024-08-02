import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import Cabecera from './componentes/Cabecera'
import Cuerpo from './componentes/Cuerpo'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cabecera/>
    <Cuerpo/>
  </React.StrictMode>,
)



