
import React, { useState } from 'react'


const Cabecera = () => {

    const [valorBoleano, seTvalorBoleano] = useState(false)

    const visualizador_menu = () =>{
        seTvalorBoleano(!valorBoleano)
    }

    return (
        <header className=' w-screen h-[50px] fixed top-0px left-0 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex justify-center z-40'>
            <div className=' w-full md:w-[1100px] flex justify-between items-center'>
                <div className='text-[20px] font-[800] w-fit md:p-0 p-5'>
                    Marlon <span className='text-principal'>Lupaca</span> 
                </div>

                <button className='md:hidden text-[25px] px-4' onClick={ visualizador_menu }>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className={`gap-2 p-4 px-5 bg-[rgba(0,0,0,0.5)] md:gap-0 md:p-0 absolute md:static top-[50px]  md:w-[500px] flex flex-col md:flex-row md:bg-[transparent] justify-evenly font-[500] transition-all ${valorBoleano ? "right-[-1px] " : "right-[-100%]"}`}>
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