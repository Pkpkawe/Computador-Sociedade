// Import React
import React from 'react'
import { useNavigate } from 'react-router-dom'

// Function
const InfoPesquisado = ({ subtopic, input, setSearchValue }) => {
    const navigate = useNavigate()

    const handleNavigate = (event) => {
        event.preventDefault()

        input.current.value = ""
        setSearchValue("")
        input.current.blur()

        navigate(`/info?search=${subtopic.title}`)
    }

    return (
        <div onClick={handleNavigate} className='bg-gray-100 w-full h-[90px] p-[10px] flex justify-between items-center gap-[10px] rounded-[5px] shadow-md hover:cursor-pointer'>
            <img className="h-full aspect-video" src={subtopic.image} alt="Imagem do subtópico" />
            <div className='flex flex-col text-right'>
                <p className='text-[1.05rem] max-[650px]:text-[0.9rem] font-semibold'>{subtopic.title}</p>
            </div>
        </div>
    )
}

export default InfoPesquisado