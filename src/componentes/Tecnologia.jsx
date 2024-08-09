import React from 'react'

const Tecnologia = ({name_url, name}) => {
    return (
        <div className='flex flex-col items-center gap-1 hover:scale-[1.08] transition-all' >
            <img src={`/Portfolio_dev/assets/img/${name_url}`} alt={name_url} className='h-8 sm:h-10 md:h-[70px]'/>
            <p className='text-[10px] mt-1 md:text-[16px]'>{name}</p>
        </div>
    )
}

export default Tecnologia
