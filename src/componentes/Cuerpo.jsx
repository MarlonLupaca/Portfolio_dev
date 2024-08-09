import React from 'react'
import Home from './Home';

import SobreMi from './SobreMi';



const Cuerpo = () => {
    return (
        <div> 
            <Home/>
            <SobreMi/>
            <div id='Proyectos' className='border h-[100vh] pt-[50px]'>
                <section className='secion' >
                    <h2>Hola, Proyectos</h2>
                </section>
            </div>
            <div id='Contacto' className='border h-[100vh] pt-[50px]'>
                <section className='secion' >
                    <h2>Hola, contacto</h2>
                </section>
            </div>
        </div>
    )
}

export default Cuerpo