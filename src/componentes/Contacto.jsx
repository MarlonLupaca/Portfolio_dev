import React, { useState } from 'react';

const Contacto = () => {
    const [mensaje, setMensaje] = useState('');
    const [status, setStatus] = useState(null);
    const [cargando, setCargando] = useState(false); // Estado para manejar la carga

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        setCargando(true); // Iniciar el estado de carga

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
        })
        .then((response) => {
            if (response.ok) {
                setStatus('success');
                setMensaje('¡Correo enviado con éxito!');
                form.reset();
            } else {
                setStatus('error');
                setMensaje('Hubo un error. Inténtalo nuevamente.');
            }
        })
        .catch(() => {
            setStatus('error');
            setMensaje('Hubo un error. Inténtalo nuevamente.');
        })
        .finally(() => {
            setCargando(false); // Finalizar el estado de carga
        });
    };

    return (
        <div id='Contacto' className='pb-[80px] pt-[50px]'>
            <section className='section flex justify-center md:gap-[100px] items-center pt-4'>
                <img src="img/contactame.png" alt="telefono" className='hidden md:block w-[300px]' />
                <div>
                    <h2 className='text-center text-[30px] font-[800] mb-4'>Contac<span className='text-principal'>tame</span></h2>
                    <form 
                        action="https://formsubmit.co/8791cd9e6c7d07e99441fdbb86485d6d" 
                        method="POST" 
                        className='bg-[rgba(255,255,255,0.1)] w-[330px] sm:w-[350px] mb-2 text-[16px] flex flex-col gap-4 px-6 py-6 rounded-lg'
                        onSubmit={handleSubmit}
                    >
                        <div className='contenedor_inputs'>
                            <label htmlFor="nombre" className='text-white'>Nombre</label>
                            <input 
                                placeholder='Federico' 
                                className="input" 
                                type="text" 
                                id='nombre' 
                                name="nombre"
                            />
                        </div>
                        <div className='contenedor_inputs'>
                            <label htmlFor="correo" className='text-white'>Correo</label>
                            <input 
                                placeholder="example@gmail.com" 
                                className="input" 
                                type="email" 
                                id='correo' 
                                name="correo"
                            />
                        </div>
                        <div className='contenedor_inputs'>
                            <label htmlFor="asunto" className='text-white'>Asunto</label>
                            <textarea 
                                placeholder="Deseo consultar..." 
                                className="input max-h-[100px] h-[100px] min-h-[100px]" 
                                name="asunto" 
                                id="asunto" 
                            ></textarea>
                        </div>
                        <div className='flex justify-end'>
                            <button 
                                type="submit" 
                                className='bg-[#FF69B4] w-fit px-4 py-1 rounded-lg font-[700] text-white opacity-95'
                                disabled={cargando} // Deshabilitar el botón mientras se carga
                            >
                                {cargando ? 'Enviando...' : 'Enviar'} {/* Cambiar texto del botón */}
                            </button>
                        </div>
                        
                        <input type="hidden" name="_next" value="https://marlonlupaca.github.io/Portfolio_dev/"/>
                        <input type="hidden" name="_captcha" value="false"/>
                    </form>

                    {/* Mostrar mensaje de éxito o error */}
                    {status === 'success' && <p className='text-white mt-4 absolute w-[330px] sm:w-[350px] flex justify-center p-1 rounded-lg font-[800] bg-[#24B744]'>{mensaje}</p>}
                    {status === 'error' && <p className='text-white mt-4 absolute w-[330px] sm:w-[350px] flex justify-center p-1 rounded-lg font-[800] bg-[#C72A2A]'>{mensaje}</p>}
                </div>
            </section>
        </div>
    );
};

export default Contacto;
