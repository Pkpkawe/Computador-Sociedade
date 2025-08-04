// Import React
import React from 'react'

// Components
import Destaque_Principal from '../components/Destaque_Principal'
import MoreInfo from '../components/MoreInfo'
import DestaquePrincipal from '../assets/img/Destaque_Principal.png'

// Layouts
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'

// Function
const Home = () => {
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
                        
                    </div>
                    <button className='w-1/3 m-auto p-[10px] border rounded-[30px]'>Ver Mais</button>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Home