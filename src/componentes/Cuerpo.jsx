import React from 'react'
import Home from './Home';

import SobreMi from './SobreMi';
import Proyecto from './Proyecto';
import Contacto from './Contacto';



const Cuerpo = () => {
    return (
        <div> 
            <Home/>
            <SobreMi/>
            <div id='Proyectos' className='border pt-[50px]'>
                <section className='border flex flex-col items-center gap-2'>
                    <h2 className='text-center text-[30px] font-[800] '>Proyectos <span className='text-principal'>propios</span></h2>
                    <Proyecto/>
                    <Proyecto/>
                    <Proyecto/>
                    
                </section>
            </div>
            <Contacto/>
            
        </div>
    )
}

export default Cuerpo