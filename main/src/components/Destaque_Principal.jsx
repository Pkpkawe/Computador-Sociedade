// Import React
import React from 'react'

// Function
const Destaque_Principal = ({subtopic}) => {
    return (
        <div className="relative w-full">
            <img src={subtopic.image} alt="Foto do Destaque Principal" className="object-cover w-full aspect-video min-h-[400px] max-h-[800px]" />
            <div className="absolute bottom-[0] bg-[#C1C1C18F] w-full p-[10px] text-[1.1rem] font-semibold">{subtopic.caption}</div>
        </div>
    )
}

export default Destaque_Principal