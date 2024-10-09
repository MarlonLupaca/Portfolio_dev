import React from 'react'

const Footer = () => {
    return (
        <footer className='h-[65px] flex justify-evenly items-center bg-[rgb(28,37,55)]'>
            <p className='text-[13px] md:text-[15px]'>Desarrollado con <strong>React</strong> y <strong>Tailwind CSS</strong></p>
            <div className="flex gap-4 md:text-[15px]">
                <a href="https://github.com/MarlonLupaca" target="_blank" className="flex gap-[6px] items-center bg-[rgba(255,255,255,0.1)] p-[10px] rounded-full">
                    <i className="fa-brands fa-github text-[20px]"></i>
                </a>
                <a href="https://linkedin.com/in/marlonlupaca" target="_blank" className="flex gap-[6px] items-center bg-[rgba(255,255,255,0.1)] p-[10px] rounded-full">
                    <i className="fa-brands fa-linkedin text-[20px]"></i> 
                </a>
                
            </div>
        </footer>
    )
}

export default Footer
