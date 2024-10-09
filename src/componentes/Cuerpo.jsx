import React from 'react'
import Home from './Home';

import SobreMi from './SobreMi';
import Proyecto from './Proyecto';
import Contacto from './Contacto';
import Trabajos from './Trabajos';



const Cuerpo = () => {
    return (
        <div> 
            <Home/>
            <SobreMi/>
            <Trabajos/>
            <Contacto/>
        </div>
    )
}

export default Cuerpo