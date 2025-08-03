// Import React
import React from 'react'

// Components
import TopicTree from '../components/TopicTree'

// Funtion
const Library = () => {
    return (
        <>
            <header className="w-full h-[100px]">
                {/* NavBar */}
            </header>

            <main className="flex flex-col w-full h-vh">
                <section id="SideBar" className="fixed bg-color-3 w-1/5 h-full text-center pt-[15px] p-[10px] flex flex-col gap-[15px]">
                    <h1 className="text-[1.2rem] font-bold">Computador & Sociedade</h1>

                    <div id="Topics" className="flex flex-col gap-[5px]">
                        {LibraryJSON.map((Topic) => {
                          return <TopicTree TopicName={Topic.name} SubtopicsList={Topic.subtopics} />
                        })}
                    </div>
                </section>

                <section>
                    {/* Tags e Biblioteca */}
                </section>
            </main>

            {/* Footer */}
        </>
    )
}

export default Library