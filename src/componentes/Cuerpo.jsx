import React from 'react'
import Home from './Home';



const Cuerpo = () => {
    return (
        <div> 
            <Home/>
            <div id='Experiencia' className='border h-[100vh]'>
                <section className='secion'>
                    <h1>Hola, Expericia</h1>
                </section>
            </div>
            <div id='Proyectos' className='border h-[100vh]'>
                <section className='secion' >
                    <h1>Hola, Proyectos</h1>
                </section>
            </div>
            <div id='SobreMi' className='border h-[100vh]'>
                <section className='secion' >
                    <h1>Hola, sobre mi</h1>
                </section>
            </div>
            <div id='Contacto' className='border h-[100vh]'>
                <section className='secion' >
                    <h1>Hola, contacto</h1>
                </section>
            </div>
        </div>
    )
}

export default Cuerpo