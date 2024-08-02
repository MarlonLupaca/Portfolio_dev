
import React from 'react'


const Cabecera = () => {
    return (
        <header className=' w-full h-[50px] sticky top-0 left-0 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex justify-center z-40'>
            <div className=' w-[1100px] flex justify-between items-center'>
                <div className='text-[20px] font-[800]'>
                    Marlon <span className='text-principal'>Lupaca</span> 
                </div>
                <div className=' w-[500px] flex justify-evenly font-[500]'>
                    <a href="#home" className='text-principal transform scale-[1.05]  underline' >Home</a>
                    <a href="#Experiencia" className='link-transform'>Experiencia</a>
                    <a href="#Proyectos" className='link-transform'>Proyectos</a>
                    <a href="#SobreMi" className='link-transform'>Sobre mi</a>
                    <a href="#Contacto" className='link-transform'>Contacto</a>
                </div>
            </div>
        </header>
    )
}
export default Cabecera