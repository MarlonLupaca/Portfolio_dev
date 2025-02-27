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
                    <h2 className='text-center text-[30px] font-[800] mb-2'>Contac<span className='text-principal'>tame</span></h2>
                    <div className='relative flex justify-center'>
                        <img 
                            src="./img/wpp.png" 
                            alt="contacto"
                            className='w-[330px] rounded-lg' 
                        />
                        <a 
                            href="https://wa.me/51921481607"
                            className='absolute bottom-[15px]'
                            target="_blank"
                        >
                            <div className=' w-[195px] h-[50px] rounded-full bg-[#04C163] flex justify-center items-center font-[700] text-[18px] gap-2 transition-all duration-100 hover:scale-[1.05] shadow-lg cursor-pointer'>
                                <i className="fa-brands fa-whatsapp text-[25px]"></i>
                                <span>
                                    Empezar Chat
                                </span>
                            </div>
                        </a>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contacto;
