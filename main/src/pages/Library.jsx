// Import React
import React from 'react'
import { useContext } from 'react'

// Components
import TopicTree from '../components/TopicTree'

// Layouts
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'

// Contexts
import { LibraryJsonContext } from '../contexts/LibraryJsonContext'

// Funtion
const Library = () => {
    const {LibraryJSON} = useContext(LibraryJsonContext)

    return (
        <>
            <header className="w-full h-[100px]">
                {/* NavBar */}
                <NavBar />
            </header>

            <main className="flex flex-col w-full h-[100vh]">
                <section id="SideBar" className="overflow-auto bg-color-3 w-1/5 h-full text-center pt-[15px] p-[10px] flex flex-col gap-[15px]">
                    <h1 className="text-[1.25rem] font-bold">Computador & Sociedade</h1>

                    <div id="Topics" className="flex flex-col gap-[8px]">
                        {LibraryJSON.map((Topic, index) => {
                          return <TopicTree key={index} TopicName={Topic.name} SubtopicsList={Topic.subtopics} />
                        })}
                    </div>
                </section>

                <section>
                    {/* Tags e Biblioteca */}
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Library