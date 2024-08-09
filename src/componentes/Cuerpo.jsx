import React from 'react'
import Home from './Home';
import Tecnologia from './Tecnologia';



const Cuerpo = () => {
    return (
        <div> 
            <Home/>
            <div id='SobreMi' className=' h-[100vh] pt-[50px] p-1'>
                <section className='h-full flex flex-col justify-center
                gap-5 px-8 md:flex-row'>
                    <div className='flex flex-col items-center md:w-[50%] md:justify-center md:px-[40px]'>
                        <h2 className='text-[35px] font-[800] md:text-[50px]'>Sobre <span className='text-principal'>mi</span></h2>
                        <p className='text-pretty text-center my-3 text-[14px] sm:text-[18px] md:text-[23px]'>Soy un developer en formación, <span className='text-[#FF69B4]'>apasionado por la programación</span>. Me enfoco en crear soluciones eficientes, <span className='text-[#0bcdc3]'>mejorando mis habilidades</span> a través de cada proyecto y manteniendo una <span className='text-[#d8b137]'>curiosidad constante por nuevas tecnologías</span>. Mi objetivo es seguir creciendo y aportar valor en cada equipo con el que trabajo.</p>
                    </div>
                    <div className='flex flex-col items-center md:w-[50%] md:justify-center'>
                        <h3 className='font-[800] text-[15px] sm:text-[16px] mt-2 md:text-[35px]'>Tecnologías, <span className='text-purple-300'>herramientas y lenguajes</span></h3>
                        <div className='grid grid-cols-4 mt-5 gap-3 p-4 bg-custom-grey-rgba rounded-[15px] md:gap-5 md:p-8'>
                            
                            <Tecnologia name="HTMl" name_url="./img/html-5.png"/>
                            <Tecnologia name="CSS" name_url="./img/css-3.png"/>
                            <Tecnologia name="JavaScript" name_url="./img/js.png"/>
                            <Tecnologia name="Java" name_url="./img/java.png"/>
                            <Tecnologia name="GitHub" name_url="./img/github_logo.png"/>
                            <Tecnologia name="Git" name_url="./img/git_logo.png"/>
                            <Tecnologia name="Tailwind" name_url="./img/tailwind.png"/>
                            <Tecnologia name="Sprint Boot" name_url="./img/spring.png"/>
                            <Tecnologia name="Vite" name_url="./img/vite.png"/>
                            <Tecnologia name="React" name_url="./img/react_logo.png"/>
                            <Tecnologia name="MySQL" name_url="./img/MySQL-Logo.png"/>
                        </div>
                    </div>
                    

                </section>
            </div>
            <div id='Experiencia' className='border border-red-400 h-[100vh] pt-[50px] p-10'>
                <section className='border h-full'>
                    <h2>Hola, Expericia</h2>
                </section>
            </div>
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