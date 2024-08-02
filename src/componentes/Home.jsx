import React from 'react'
import fotoSinFondo from '../img/Foto_Marlon.png';

const Home = () => {
    return (
        <div id='home' className='h-[100vh] flex justify-center'>
            <section className='  mt-[20px] md:mt-[50px] md:w-[1100px] flex flex-col-reverse md:flex-row md:justify-between justify-center items-center'>
                <div className=' md:w-[550px] w-full md:p-0 px-10'>
                    <h1 className=' font-[800] text-[35px] ms:text-[38px] md:text-[60px]'>Hola, soy <span className='text-principal'>Marlon</span></h1>
                    <div className='  text-[17px] relative mt-[15px] h-[28px] md:h-[45px] overflow-hidden md:mt-[2px]'>
                        <div className=' ms:text-[18px] md:text-[30px] absolute animate-desplazamiento_movil md:animate-desplazamiento_destok'>
                            <p className='font-[600]'>Estudiante de <span className='text-principal'>Ingeniería de Sistemas</span></p>
                            <p className='font-[600]'>Desarrollador <span className='text-principal'>Java</span></p>
                            <p className='font-[600]'>Desarrollador <span className='text-principal'>Web</span></p>
                        </div>
                    </div>
                    <p className='mt-[15px] text-[18px] md:text-[20px] w-full md:w-[450px]' >De <span className='text-[#FF69B4]'>Arequipa, Perú. </span>Especialista en desarrollar <span className='text-[#d8b137]'>aplicaciones desde cero.</span></p>
                    <div className=' md:text-[14px] text-[12px] ms:text-[13px] w-full md:w-[400px] flex md:justify-evenly mt-[20px] md:gap-0 gap-4'>
                        <button className='border border-gray-400 md:px-[20px] px-3 py-[5px] rounded-[8px] bg-custom-grey-rgba'>
                            <i className="fa-brands fa-google-plus-g mr-2" ></i>
                            Gmail
                        </button>
                        <a href="https://github.com/MarlonLupaca" target="_blank">
                            <button className='border border-gray-400 md:px-[20px] px-3 py-[5px] rounded-[8px] bg-custom-grey-rgba'>
                                <i className="fa-brands fa-github mr-2"></i>
                                GitHub
                            </button>
                        </a>
                        <button className='border border-gray-400 md:px-[20px] py-[5px] px-3 rounded-[8px] bg-custom-grey-rgba'>
                            <i className="fa-brands fa-linkedin mr-2"></i>
                            LinkedIn
                        </button>
                    </div>
                </div>
                <img src={ fotoSinFondo } alt="Foto del dev" className='mb-10 md:mb-0 sm:mb-14 shadow-custom-green bg-custom-rgba transition duration-300 ease-in-out h-[200px] sm:h-[250px] md:h-[400px] rounded-full md:mr-[50px] hover:scale-[1.02]' />
            </section>
        </div>
    )
}

export default Home
