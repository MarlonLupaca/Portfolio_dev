import { useState } from "react"

const Proyecto = ({ proyecto }) => {
    
    
    return (
        <div className="w-[325PX] sm:w-[350PX] bg-[rgba(255,255,255,0.1)] flex flex-col items-center px-6 justify-around py-4 pb-3 rounded-lg mt-2 mb-[30px] md:mb-0 " >

            <p className="font-[800] text-[20px] mb-2">{proyecto.Nombre.primero} <span className="text-[#FF69B4]">{proyecto.Nombre.segundo}</span></p>
            <div className="relative">
                <div className="w-full h-[101%] flex items-end filtrado absolute rounded-lg">
                    <div className="h-fit py-[10px] px-3 w-full flex gap-3 ">
                        {
                        proyecto.Tecnologias.map((item, index) => (
                            <div key={index} className="bg-gray-600 w-fit font-[800] text-[12px] py-1 px-2 rounded-lg">
                            {item}
                            </div>
                        ))
                        }

                    </div>
                    
                </div>
                <img src={proyecto.url.imagen} alt="" className="w-full rounded-lg"/>
            </div>
            
            <p className="text-[13px] mt-[20px] mb-[15px] font-[300] my-2 text-pretty">{proyecto.Descripcion}</p>
            <div className="flex gap-5 w-full justify-end mb-2">
                {
                    proyecto.Vistas.github && <a href={proyecto.url.github}
                    className="text-[13px] h-8 px-3 py-2 rounded-lg font-[800] bg-black flex items-center gap-2 hover:shadow-custom-white transition-all" target="_blank" rel="noopener noreferrer">
                        <span>Github</span>
                        <img src="img/github_logo.png" alt="GitHub logo" className="w-[18px]"/>
                    </a>
                }
                {
                    proyecto.Vistas.preview && <a href={proyecto.url.preview}
                    className="bg-blue-600 text-[13px] font-[800] px-3 gap-2 flex items-center h-8 rounded-lg hover:shadow-custom-white transition-all" target="_blank" rel="noopener noreferrer ">
                        <span>Preview</span>
                        <i className="fa-solid fa-up-right-from-square"></i>
                    </a>
                }

            </div>
        </div>
    )
    }

export default Proyecto
