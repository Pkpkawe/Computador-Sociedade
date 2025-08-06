// Import React
import React, { use } from 'react'
import { useState, useContext } from 'react'

// Components
import TopicTree from '../components/TopicTree'
import Book from '../components/Book'

// Layouts
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'

// Contexts
import { LibraryJsonContext } from '../contexts/LibraryJsonContext'

// Funtion
const Library = () => {
    const {LibraryJSON} = useContext(LibraryJsonContext)
    const [tags, setTags] = useState([])

    return (
        <>
            <header className="w-full h-[120px]">
                {/* NavBar */}
                <NavBar />
            </header>

            <main className="flex w-full h-[150vh]">
                <section id="SideBar" className="overflow-auto bg-color-3 w-[23%] min-w-[230px] h-full text-center p-[15px] flex flex-col gap-[20px]">
                    <h1 className="text-[1.25rem] font-bold">Computador & Sociedade</h1>

                    <div id="Topics" className="flex flex-col gap-[15px]">
                        {LibraryJSON.map((topic, index) => {
                          return <TopicTree key={index} Topic={topic} Tags={tags} SetTags={setTags} />
                        })}
                    </div>
                </section>

                <section className='overflow-auto w-[77%] flex flex-col gap-[30px] p-[20px]'>
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