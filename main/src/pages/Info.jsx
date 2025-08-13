// Import React
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'

// Layouts
import Header from '../layout/Header'
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
            {/* Header */}
            <Header />

            <main className="bg-[#EEEEEE] w-full">
                <section className='bg-white w-[90%] max-[650px]:w-full m-auto flex flex-col items-center gap-[25px] p-[3%] max-[650px]:p-[4%] pb-[8%]'>
                    <div className='w-full flex flex-col gap-[5px]'>
                        <h1 className='self-start text-[2.1rem] font-bold'>{subtopic.title}</h1>
                        <p className='self-start text-[1.2rem]'>{subtopic.caption}</p>
                    </div>
                    <img className='w-full max-h-[800px] aspect-video object-cover' src={subtopic.image} alt="Imagem do subtópico" />

                    <div className='w-full flex flex-col gap-[15px] indent-[30px]'>
                        {subtopic.info.map((paragraph, index) => {
                            return <p key={index} className='text-justify text-[1.15rem] max-[430px]:text-[1rem]'>{paragraph}</p>
                        })}
                    </div>

                    <div className='w-full self-start flex flex-col gap-[8px]'>
                        <h2 className='text-[1rem] font-bold'>Referências:</h2>
                        {subtopic.references.map((reference, index) => {
                            return <p key={index} className='text-left text-[0.9rem] max-[430px]:text-[0.6rem]'>{reference}</p>
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