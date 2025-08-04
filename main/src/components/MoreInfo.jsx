// Import React
import React from 'react'
import { useNavigate } from 'react-router-dom'

// Function
const MoreInfo = ({Title, Caption, Image}) => {
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate(`/info?search=${Title}`)
    }

    return (
        <div className='w-full flex flex-col gap-[20px]'>
            <div className='w-[95%] h-[250px] m-auto flex justify-between items-center gap-[10px]'>
                <img src={Image} alt="Foto da Informação" className='h-full aspect-video object-cover' />
                <div className='w-[60%] h-full flex flex-col justify-between gap-[10px]'>
                    <div className='flex flex-col gap-[5px]'>
                        <h3 className="text-[1.7rem] font-semibold">{Title}</h3>
                        <p className='text-[1.2rem]'>{Caption}</p>
                    </div>

                    <button className='bg-color-3 font-semibold w-full border p-[5px] rounded-[10px] hover:cursor-pointer' onClick={handleOnClick}>Ver Sobre</button>
                </div>
            </div>

            <hr className="bg-black w-full h-[1px] border-none" />
        </div>
    )
}

export default MoreInfo