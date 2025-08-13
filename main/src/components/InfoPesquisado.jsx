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
        <div onClick={handleNavigate} className='bg-gray-100 w-full h-[90px] p-[10px] flex justify-between items-center gap-[10px] border-[1.5px] border-gray-300 rounded-[5px] shadow-md hover:cursor-pointer hover:bg-gray-200'>
            <img className="max-[500px]:hidden h-full aspect-video" src={subtopic.image} alt="Imagem do subtópico" />
            <div className='w-full flex flex-col text-right max-[500px]:text-center'>
                <p className='text-[1.05rem] max-[650px]:text-[0.9rem] font-semibold'>{subtopic.title}</p>
            </div>
        </div>
    )
}

export default InfoPesquisado