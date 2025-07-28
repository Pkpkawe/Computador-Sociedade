// Import React
import React from 'react'

// Function
const Home = () => {
    return (
        <>
            <header className="w-full h-[100px]">
                {/* NavBar */}
            </header>

            <main className="w-[90%] flex flex-col m-auto">
                <section className="w-full flex flex-col gap-[20px]">
                    <h1 className="text-[2rem] font-bold">Destaques</h1>

                    {/* Componente do Destaque Principal */}

                    <div className='w-full flex justify-between'> {/* Contém os outros destaques */}

                    </div>
                </section>

                <section> {/* Seção mostrando outros assuntos */}

                </section>
            </main>

            {/* Footer */}
        </>
    )
}

export default Home