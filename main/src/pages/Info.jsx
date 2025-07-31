// Import React
import React from 'react'

// Function
const Info = ({Subtopic}) => {
    return (
        <>
            <header className="w-full h-[100px]">
                {/* NavBar */}
            </header>

            <main className="bg-[#EEEEEE] w-full">
                <section className='bg-white w-[90%] m-auto flex flex-col items-center gap-[20px] p-[3%]'>
                    <div className='w-full flex flex-col gap-[5px]'>
                        <h1 className='self-start text-[2.1rem] font-bold'>{Subtopic.title}</h1>
                        <p className='self-start text-[1.3rem]'>{Subtopic.subtitle}</p>
                    </div>
                    <img className='w-full aspect-video object-cover' src={Subtopic.image} alt="Imagem do subtópico" />

                    <div className='w-full flex flex-col gap-[15px] indent-[30px]'>
                        {Subtopic.info.map((paragraph, index) => {
                            return <p key={index} className='text-[1.1rem]'>{paragraph}</p>
                        })}
                    </div>
                </section>
            </main>

            {/* Footer */}
        </>
    )
}

export default Info