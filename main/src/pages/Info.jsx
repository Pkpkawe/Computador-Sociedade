// Import React
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import {useParams} from 'react-router-dom'

// Function
const Info = () => {
    const {LibraryJSON} = useContext()
    const [subtopic, setSubtopic] = useState(null)
    let {search} = useParams()
    
    useEffect(() => {
        for (const Topic of LibraryJSON) {
            for (const Subtopic of Topic) {
                if (search == Subtopic.title) {
                    setSubtopic(Subtopic)
                    break
                }
            }
            if (subtopic) break
        }
    } ,[])

    return (
        <>
            <header className="w-full h-[100px]">
                {/* NavBar */}
            </header>

            <main className="bg-[#EEEEEE] w-full">
                <section className='bg-white w-[90%] m-auto flex flex-col items-center gap-[20px] p-[3%]'>
                    <div className='w-full flex flex-col gap-[5px]'>
                        <h1 className='self-start text-[2.1rem] font-bold'>{subtopic.title}</h1>
                        <p className='self-start text-[1.3rem]'>{subtopic.subtitle}</p>
                    </div>
                    <img className='w-full aspect-video object-cover' src={subtopic.image} alt="Imagem do subtópico" />

                    <div className='w-full flex flex-col gap-[15px] indent-[30px]'>
                        {subtopic.info.map((paragraph, index) => {
                            return <p key={index} className='text-[1.1rem]'>{paragraph}</p>
                        })}
                    </div>
                </section>
            </main>

            {/* Footer */}
        </>
    )
}

export default Info