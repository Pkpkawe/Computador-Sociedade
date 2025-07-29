// Import React
import React from 'react'

// Components
import Destaque_Principal from '../components/Destaque_Principal'
import MoreInfo from '../components/MoreInfo'
import DestaquePrincipal from '../assets/img/Destaque_Principal.png'

// Function
const Home = () => {
    return (
        <>
            <header className="w-full h-[100px]">
                {/* NavBar */}
            </header>

            <main className="w-[90%] flex flex-col gap-[20px] m-auto">
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
                </section>
            </main>

            {/* Footer */}
        </>
    )
}

export default Home