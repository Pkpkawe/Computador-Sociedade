// Import React
import React from 'react'
import { useNavigate } from 'react-router-dom'

// Base_Url
const base_url = import.meta.env.BASE_URL

// Function
const MoreInfo = ({Title, Caption, Image}) => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`${base_url}info?search=${Title}`)
    }

    return (
        <div className='w-full flex flex-col gap-[20px]'>
            <div className='w-full h-auto m-auto flex max-[1000px]:flex-col justify-around items-center gap-[10px]'>
                <img src={Image} alt="Foto da Informação" className='w-[40%] max-[1000px]:w-full aspect-video object-cover' />
                <div className='w-[60%] max-[1000px]:w-full aspect-[8/3] max-[1000px]:aspect-auto flex flex-col justify-between gap-[10px]'>
                    <div className='flex flex-col gap-[5px]'>
                        <h3 className="text-[1.7rem] font-semibold">{Title}</h3>
                        <p className='text-[1.2rem]'>{Caption}</p>
                    </div>

                    <button className='bg-color-3 font-semibold w-full border p-[5px] rounded-[10px] hover:cursor-pointer' onClick={handleNavigate}>Ver Sobre</button>
                </div>
            </div>

            <hr className="bg-black w-full h-[1px] border-none" />
        </div>
    )
}

export default MoreInfo