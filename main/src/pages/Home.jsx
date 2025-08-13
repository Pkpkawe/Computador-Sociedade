// Import React
import React from 'react'
import { useState, useEffect, useContext } from 'react'

// Components
import Destaque_Principal from '../components/Destaque_Principal'
import MoreInfo from '../components/MoreInfo'
import Featured from '../components/Featured'

// Layouts
import Header from '../layout/Header'
import Footer from '../layout/Footer'

// Contexts
import { LibraryJsonContext } from '../contexts/LibraryJsonContext'

// Json
import ImportHighlightsJSON from '../../highlights.json'

// Function
const Home = () => {
    const {LibraryJSON} = useContext(LibraryJsonContext)
    const [subtopics, setSubtopics] = useState([])
    const HighlightsJSON = ImportHighlightsJSON

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    const handleAddMoreInfo = () => {
        const newSubtopics = [...subtopics]
        for (let init = 0; init < 10; init++) {
            const topicRandom = getRandomInt(0, LibraryJSON.length)
            const subtopicRandom = getRandomInt(0, LibraryJSON[topicRandom].subtopics.length)
            const subtopic = LibraryJSON[topicRandom].subtopics[subtopicRandom]
            if (JSON.stringify(HighlightsJSON[0]) != JSON.stringify(subtopic) && !newSubtopics.includes(subtopic)) {
                newSubtopics.push(subtopic)
            }
        }
        setSubtopics(newSubtopics)
    }

    useEffect(() => {
        handleAddMoreInfo()
    }, [])

    return (
        <>
            {/* Header */}
            <Header />

            <main className="w-[90%] flex flex-col gap-[20px] m-auto mt-[50px] mb-[50px]">
                <section className="w-full flex flex-col gap-[20px]">
                    <h2 className="text-[2rem] font-bold">Destaques da Semana</h2>
                    <Destaque_Principal subtopic={HighlightsJSON[0]}/>
                    <Featured subtopics={HighlightsJSON[1]} />
                </section>

                <section className="w-full flex flex-col gap-[20px]"> {/* Seção mostrando outros assuntos */}
                    <h2 className="text-[2rem] font-bold">Mais Informações</h2>
                    <hr className="bg-black w-full h-[1px] border-none" />

                    <div className='w-full flex flex-col gap-[20px]'> {/* Outros Assuntos */}
                        {subtopics.map((subtopic, index) => {
                            return <MoreInfo key={index} Title={subtopic.title} Caption={subtopic.caption} Image={subtopic.image}/>
                        })}
                    </div>

                    <button className='w-1/3 m-auto p-[10px] border rounded-[30px] hover:cursor-pointer' onClick={handleAddMoreInfo}>Ver Mais</button>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Home