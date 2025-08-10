// Import React
import React from 'react'

// Assets
import iconInstagram from '../assets/icons/instagram.png'
import iconSite from '../assets/icons/site.png'
import iconSpotify from '../assets/icons/spotify.png'


// Layouts
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'

// Function
const About = () => {
    return (
        <>
            <header className="w-full h-[120px]">
                {/* NavBar */}
                <NavBar />
            </header>

            <main className="w-full p-[3%] flex flex-col items-center gap-[20px]">
                <div className='w-full text-center'>
                    <h1 className='text-[2rem] font-bold p-[5px]'>Sobre o Blog</h1>
                    <hr />
                </div>

                <section className='w-[90%] p-[10px] flex flex-col gap-[10px] items-center border rounded-[5px]'>
                    <h2 className='text-[1.6rem] font-semibold'>Informações Iniciais</h2>
                    
                    <div className='text-center flex flex-col items-center gap-[10px]'>
                        <div>
                            <p className='text-[1.2rem]'><strong>Desenvolvido por:</strong></p>
                            <p className='text-[1.1rem]'>Pietro Kawê Silva Oliveira, Pedro Henrique Lopes da Silva e José Guilherme Gurgel Barbosa</p>
                        </div>
                        <div>
                            <p className='text-[1.2rem]'><strong>Instituição:</strong></p>
                            <p className='text-[1.1rem]'>IFRN - Campus Pau dos Ferros</p>
                        </div>
                        <div>
                            <p className='text-[1.2rem]'><strong>Curso/Série:</strong></p>
                            <p className='text-[1.1rem]'>2º ano do Ensino Médio Técnico em Informática (2025)</p>
                        </div>
                        <div>
                            <p className='text-[1.2rem]'><strong>Disciplina:</strong></p>
                            <p className='text-[1.1rem]'>Sociologia (2º bimestre)</p>
                        </div>
                        <div>
                            <p className='text-[1.2rem]'><strong>Orientador:</strong></p>
                            <p className='text-[1.1rem]'>Professor Timóteo da Cunha</p>
                        </div>
                    </div>
                </section>

                <section className='w-[90%] text-center p-[10px] flex flex-col gap-[10px] border rounded-[5px]'>
                    <h2 className='text-[1.6rem] font-semibold'>Objetivo</h2>
                    <p className='text-[1.1rem]'>Este blog foi criado como parte de um trabalho avaliativo da matéria de Sociologia, com o intuito de explorar temas relacionados a Computador e Sociedade. Nosso objetivo é promover conteúdo que possa ser lido sobre algum tópico desse tema, utilizando a linguagem digital para democratizar o acesso ao conhecimento.</p>
                </section>

                <section className='w-[90%] text-center p-[10px] flex flex-col items-center gap-[10px] border rounded-[5px]'>
                    <h2 className='text-[1.6rem] font-semibold'>Redes Sociais</h2>
                    <div className='w-1/2 flex justify-around gap-[20px]'>
                        <a href="https://www.instagram.com/menosumtrouxa/" target="_blank" className='w-[10%] aspect-square hover:cursor-pointer'><img src={iconInstagram} alt="Instagram Logo" className='w-full' /></a>
                        <a href="https://timoteodacunha.com/" target="_blank" className='w-[10%] aspect-square hover:cursor-pointer'><img src={iconSite} alt="Site Logo" className='w-full' /></a>
                        <a href="https://open.spotify.com/show/3lWO8VF2vg6NsVJXAA4fp2?si=iBqj0JxNR9W8mT4POmih-w" target="_blank" className='w-[10%] aspect-square hover:cursor-pointer'><img src={iconSpotify} alt="Spotify Logo" className='w-full' /></a>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default About