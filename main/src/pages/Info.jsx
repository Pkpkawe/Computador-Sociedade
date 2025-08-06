// Import React
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'

// Layouts
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'

// Contexts
import { LibraryJsonContext } from '../contexts/LibraryJsonContext'

// Function
const Info = () => {
    const {LibraryJSON} = useContext(LibraryJsonContext)
    const [subtopic, setSubtopic] = useState(null)
    const [searchParams] = useSearchParams();
    const location = useLocation()
    
    useEffect(() => {
        const search = searchParams.get('search');

        if (!search) {
            setSubtopic(null)
            return
        }

        let foundSubtopic = null
        for (const Topic of LibraryJSON) {
            for (const Subtopic of Topic.subtopics) {
                if (search.toLowerCase() == Subtopic.title.toLowerCase()) {
                    foundSubtopic = Subtopic
                    break
                }
            }
            if (foundSubtopic) break
        }

        setSubtopic(foundSubtopic)
    }, [location.search])

    if (!subtopic) {
        return (
            <p>Carregando...</p>
        )
    }
    
    return (
        <>
            <header className="w-full h-[120px]">
                {/* NavBar */}
                <NavBar />
            </header>

            <main className="bg-[#EEEEEE] w-full">
                <section className='bg-white w-[90%] m-auto flex flex-col items-center gap-[20px] p-[3%] pb-[10%]'>
                    <div className='w-full flex flex-col gap-[5px]'>
                        <h1 className='self-start text-[2.1rem] font-bold'>{subtopic.title}</h1>
                        <p className='self-start text-[1.2rem]'>{subtopic.caption}</p>
                    </div>
                    <img className='w-full max-h-[800px] aspect-video object-cover' src={subtopic.image} alt="Imagem do subtópico" />

                    <div className='w-full flex flex-col gap-[15px] indent-[30px]'>
                        {subtopic.info.map((paragraph, index) => {
                            return <p key={index} className='text-[1.15rem]'>{paragraph}</p>
                        })}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Info