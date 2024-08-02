import React from 'react'
import fotoSinFondo from '../img/Foto_Marlon.png';

const Home = () => {
    return (
        <div id='home' className='h-[100vh] flex justify-center'>
            <section className=' mt-[50px] w-[1100px] flex justify-between items-center'>
                <div className=' w-[550px]'>
                    <h1 className='font-[800] text-[60px]'>Hola, soy <span className='text-principal'>Marlon</span></h1>
                    <div className=' relative h-[45px] overflow-hidden mt-[2px]'>
                        <div className=' text-[30px] absolute animate-desplazamiento'>
                            <p className='font-[600]'>Estudiante de <span className='text-principal'>Ingeniería de Sistemas</span></p>
                            <p className='font-[600]'>Desarrollador <span className='text-principal'>Java</span></p>
                            <p className='font-[600]'>Desarrollador <span className='text-principal'>Web</span></p>
                        </div>
                    </div>
                    <p className='mt-[15px] text-[20px] w-[450px]' >De <span className='text-[#FF69B4]'>Arequipa, Perú. </span>Especialista en desarrollar <span className='text-[#d8b137]'>aplicaciones desde cero.</span></p>
                    <div className=' w-[400px] flex justify-evenly mt-[20px]'>
                        <button className='border border-gray-400 px-[20px] py-[5px] rounded-[8px] bg-custom-grey-rgba'>
                            <i className="fa-brands fa-google-plus-g mr-2" ></i>
                            Gmail
                        </button>
                        <a href="https://github.com/MarlonLupaca" target="_blank">
                            <button className='border border-gray-400 px-[20px] py-[5px] rounded-[8px] bg-custom-grey-rgba'>
                                <i className="fa-brands fa-github mr-2"></i>
                                GitHub
                            </button>
                        </a>
                        <button className='border border-gray-400 px-[20px] py-[5px] rounded-[8px] bg-custom-grey-rgba'>
                            <i className="fa-brands fa-linkedin mr-2"></i>
                            LinkedIn
                        </button>
                    </div>
                </div>
                <img src={ fotoSinFondo } alt="Foto del dev" className='shadow-custom-green bg-custom-rgba transition duration-300 ease-in-out h-[400px] rounded-full  mr-[50px] hover:scale-[1.02]' />
            </section>
        </div>
    )
}

export default Home
