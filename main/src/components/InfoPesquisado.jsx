// Import React
import React from 'react'

// Function
const InfoPesquisado = ({index, subtopic}) => {
    
    return (
        <div key={index} className='bg-gray-100 w-full h-[70px] p-[10px] flex justify-between items-center gap-[10px] shadow-md'>
            <img className="h-full aspect-video" src={subtopic.image} alt="Imagem do subtópico" />
            <p>{subtopic.title}</p>
        </div>
    )
}

export default InfoPesquisado