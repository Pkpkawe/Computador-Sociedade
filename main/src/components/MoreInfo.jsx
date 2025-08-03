// Import React
import React from 'react'

// Function
const MoreInfo = ({Title, Caption, Image}) => {
    return (
        <div className='w-full flex flex-col gap-[20px]'>
            <div className='flex justify-between gap-[10px]'>
                <img src={Image} alt="Foto da Informação" className='w-[40%]' />
                <div className='w-[60%]'>
                    <h3 className="text-[1.7rem] font-semibold">{Title}</h3>
                    <p className='text-[1.1rem]'>{Caption}</p>
                </div>
            </div>

            <hr className="bg-black w-full h-[1px] border-none" />
        </div>
    )
}

export default MoreInfo