// Import React
import React from 'react'
import { useState, useContext } from 'react'

// Assets
import ArrowBack from '../assets/icons/arrow_back.svg'

// Components
import TopicTree from '../components/TopicTree'
import Book from '../components/Book'

// Layouts
import Header from '../layout/Header'
import Footer from '../layout/Footer'

// Contexts
import { LibraryJsonContext } from '../contexts/LibraryJsonContext'

// Funtion
const Library = () => {
    const {LibraryJSON} = useContext(LibraryJsonContext)
    const [tags, setTags] = useState([])
    const baseWidth = "w-[70%]"
    const [widthSideBar, setWidthSideBar] = useState(baseWidth)
    const maxWidthVariants = {
        "w-[70%]": "max-[650px]:w-[70%]",
        "w-[70px]": "max-[650px]:w-[70px]",
    }

    const handleWidthSideBar = () => {
        widthSideBar == baseWidth ? setWidthSideBar("w-[70px]") : setWidthSideBar(baseWidth)
    }

    return (
        <>
            {/* Header */}
            <Header />

            <main className="max-[650px]:relative flex w-full h-[150vh]">
                <section id="SideBar" className={`${widthSideBar == baseWidth ? "max-[650px]:absolute" : "max-[650px]:relative"} overflow-auto bg-color-3 w-[30%] ${maxWidthVariants[widthSideBar]} min-w-[230px] max-[650px]:min-w-[70px] h-full text-center p-[15px] flex flex-col gap-[20px] max-[650px]:transition-all max-[650px]:duration-[0.6s]`}>
                    <div className='max-[650px]:block hidden'>
                        <button className='h-[32px] w-[32px] hover:cursor-pointer' onClick={handleWidthSideBar}><img src={ArrowBack} alt="Botão para esconder SideBar" className={`h-full aspect-aquare ${widthSideBar == baseWidth ? "rotate-none" : "rotate-180"} transition-all duration-[0.6s]`} /></button>
                        <hr />
                    </div>

                    <h1 className={`text-[1.25rem] font-bold ${widthSideBar != baseWidth ? "max-[650px]:hidden" : ""}`}>Computador & Sociedade</h1>

                    <div id="Topics" className={`${widthSideBar != baseWidth ? "max-[650px]:hidden" : ""} flex flex-col gap-[15px]`}>
                        {LibraryJSON.map((topic, index) => {
                          return <TopicTree key={index} Topic={topic} Tags={tags} SetTags={setTags} />
                        })}
                    </div>
                </section>

                <section className='overflow-auto w-full flex flex-col gap-[30px] p-[20px]'>
                    <div className='w-full flex flex-wrap gap-[10px]'>
                        {tags.length == 0 ? <div></div> : tags.map((topic, index) => {
                            return (
                                <div key="index" className='text-1.1rem font-semibold flex items-center gap-[10px] p-[10px] border rounded-[10px]'>
                                    <p>#{topic.name}</p>
                                    <button className='self-end w-[30px] h-[30px] text-[1.2rem]  font-bold flex justify-center items-center p-[3px] border rounded-[100%] hover:cursor-pointer' onClick={() => {
                                        const novaTags = tags.filter((tag) => tag !== topic )
                                        setTags(novaTags)
                                    }}>X</button>
                                </div>
                            )
                        })}
                    </div>
                    <div className={`w-full ${tags.length == 0 ? "text-center": "grid gap-[15px] grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))]"}`}>
                        {tags.length == 0 ? <p className='text-[1.5rem] m-auto'>Abra algum tópico a esquerda.</p> : tags.map((topic) => {
                            return topic.subtopics.map((subtopic, index) => {
                                return <Book key={index} subtopic={subtopic} />
                            })
                        })}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Library