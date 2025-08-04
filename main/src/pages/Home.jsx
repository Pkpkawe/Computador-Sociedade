// Import React
import React from 'react'
import { useState, useEffect, useContext } from 'react'

// Components
import Destaque_Principal from '../components/Destaque_Principal'
import MoreInfo from '../components/MoreInfo'
import DestaquePrincipal from '../assets/img/Destaque_Principal.png'

// Layouts
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'

// Contexts
import { LibraryJsonContext } from '../contexts/LibraryJsonContext'

// Function
const Home = () => {
    const {LibraryJSON} = useContext(LibraryJsonContext)
    const [subtopics, setSubtopics] = useState([])

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
            if (!newSubtopics.includes(subtopic)) {
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
            <header className="w-full h-[100px]">
                {/* NavBar */}
                <NavBar />
            </header>

            <main className="w-[90%] flex flex-col gap-[20px] m-auto mt-[50px] mb-[50px]">
                <section className="w-full flex flex-col gap-[20px]">
                    <h2 className="text-[2rem] font-bold">Destaques</h2>
                    <Destaque_Principal />

                    <div className='w-full flex justify-between'> {/* Contém os outros destaques */}

                    </div>
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