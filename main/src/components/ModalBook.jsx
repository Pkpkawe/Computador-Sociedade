// Import React
import React from 'react'
import { useNavigate } from 'react-router-dom'

// Function
const ModalBook = ({state, setState, subtopic}) => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/info?search=${subtopic.title}`)
    }

    return (
        <div className={`${state} fixed z-3 top-[0] bottom-[0] left-[0] right-[0] bg-[#000000CC] w-full h-full`}>
            <div className='relative m-auto bg-[#CCCCCC] h-7/10 w-6/10 max-[765px]:w-9/10 text-center flex flex-col justify-between items-center p-[15px] rounded-[10px] '>
                <button className='self-end bg-red-500 aspect-square text-[1.2rem] text-white font-bold p-[2px] border-black border-[1px] rounded-[5px] hover:cursor-pointer' onClick={() => setState("hidden")}>X</button>

                <img src={subtopic.image} alt="Foto do Subtópico" className="object-cover h-[60%] aspect-video rounded-[10px]" />

                <div className='flex flex-col items-center gap-[5px]'>
                    <h1 className='text-[1.3rem] font-bold'>{subtopic.title}</h1>
                    <p>{subtopic.subtitle}</p>
                </div>

                <button className='font-semibold w-1/3 p-[5px] border rounded-[10px] hover:cursor-pointer' onClick={handleNavigate}>Ver Sobre</button>
            </div>
        </div>
    )
}

export default ModalBook