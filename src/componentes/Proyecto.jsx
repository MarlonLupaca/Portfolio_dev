const Proyecto = () => {
    return (
        <div className="w-[340PX] sm:w-[370PX] bg-[rgba(255,255,255,0.1)] flex flex-col items-center px-6 gap-3 py-3 pb-3 rounded-lg">

            <p className="font-[800] text-[20px]">Sistema de <span className="text-[#FF69B4]">inventarios</span></p>
            <div className="relative">
                <div className="w-full h-full flex items-end filtrado absolute rounded-lg">
                    <div className="h-fit py-[10px] px-3 w-full flex gap-3 ">
                        <div className="bg-gray-600 w-fit font-[800] text-[12px] py-1 px-2 rounded-lg">HTML</div>
                        <div className="bg-gray-600 w-fit font-[800] text-[12px] py-1 px-2 rounded-lg">CSS</div>
                        <div className="bg-gray-600 w-fit font-[800] text-[12px] py-1 px-2 rounded-lg">JavaScript</div>
                        <div className="bg-gray-600 w-fit font-[800] text-[12px] py-1 px-2 rounded-lg">GitHub</div>
                    </div>
                    
                </div>
                <img src="img/home.png" alt="" className="w-full rounded-lg"/>
            </div>
            
            <p className="text-[13px] font-[300] mb-2 my-2 text-pretty">Este proyecto es una aplicación web de escritorio, desarrollada con JavaScript, HTML y CSS vanilla, diseñada para gestionar inventarios de manera eficiente. La página permite a los usuarios registrar, editar y eliminar productos, así como visualizar el stock disponible. El diseño limpio y la lógica implementada aseguran un buen rendimiento en la gestión de datos de inventario.</p>
            <div className="flex gap-5  w-full justify-end mb-2">
                
                <a href="https://github.com/MarlonLupaca/Sistemas-de-inventarios" 
                className="text-[13px] h-8 px-3 py-2 rounded-lg font-[800] bg-black flex items-center gap-2 hover:shadow-custom-white transition-all" target="_blank" rel="noopener noreferrer">
                    <span>Github</span>
                    <img src="img/github_logo.png" alt="GitHub logo" className="w-[18px]"/>
                </a>

                <a href="https://marlonlupaca.github.io/Sistemas-de-inventarios/" 
                className="bg-blue-600 text-[13px] font-[800] px-3 gap-2 flex items-center h-8 rounded-lg hover:shadow-custom-white transition-all" target="_blank" rel="noopener noreferrer ">
                    <span>Preview</span>
                    <i className="fa-solid fa-up-right-from-square"></i>
                </a>

                
            </div>
        </div>
    )
    }

export default Proyecto
