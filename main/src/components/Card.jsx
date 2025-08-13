// Import React
import React from 'react'
import { useNavigate } from 'react-router-dom'

// Base_Url
const base_url = import.meta.env.BASE_URL

// Function
const Card = ({subtopic}) => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`${base_url}info?search=${subtopic.title}`)
    }

    return (
        <div onClick={handleNavigate} className="overflow-hidden bg-color-2 w-[30%] h-[500px] max-[950px]:h-[250px] hover:cursor-pointer border-[2px] border-color-2 rounded-[10px] shadow-md">
            <img src={subtopic.image} alt="Imagem de destaque" className="w-full aspect-video object-cover rounded-[5px] shadow-md overflow-hidden" />
            <div className='p-3 flex flex-col gap-[5px]'>
                <h2 className='text-[1.1rem] max-[950px]:text-center font-semibold'>{subtopic.title}</h2>
                <p className="max-[950px]:hidden h-[60%] text-[1rem] text-ellipsis line-clamp-[17]">{subtopic.caption}</p>
            </div>
        </div>
    )
}

export default Card