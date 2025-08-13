// Import React
import React from 'react'

// Function
const Footer = () => {
    return (
        <footer className='bg-color-1 w-full max-h-[270px] h-[270px] p-[10px] flex flex-col max-[765px]:flex-row justify-center items-center gap-[30px]'>
            <div className='max-[765px]:w-[60%] max-[435px]:w-full text-center flex flex-col items-center gap-[15px]'>
                <h1 className='text-[1.3rem] max-[435px]:text-[1.2rem] text-white font-bold'>Computador&Sociedade</h1>
                <p className='w-[60%] max-[765px]:w-full text-[1.1rem] max-[435px]:text-[1rem] text-white'>Um blog criado para o trabalho de Sociologia do 2º bimestre dos alunos do IFRN, projeto coordenado pelo professor da matéria de Sociologia 2: Eliaquim Timóteo.</p>
            </div>
            <hr className='max-[435px]:hidden bg-white w-[95%] max-[765px]:w-[1.5px] h-[1.5px] max-[765px]:h-[95%] border-none'/>
            <div className='w-[85%] max-[765px]:w-[30%] text-center max-[765px]:text-left max-[435px]:hidden flex max-[765px]:flex-col justify-between gap-[15px] max-[765px]:gap-[20px]'>
                <p className='text-[1.1rem] max-[765px]:text-[1rem] text-white font-semibold'><a href="https://github.com/Pkpkawe/" target="_blank">Pietro Kawê Silva Oliveira</a></p>
                <p className='text-[1.1rem] max-[765px]:text-[1rem] text-white font-semibold'><a href="https://github.com/PedroLopes30/" target="_blank">Pedro Henrique Lopes da Silva</a></p>
                <p className='text-[1.1rem] max-[765px]:text-[1rem] text-white font-semibold'><a href="https://github.com/Jose-GuilhermeG/" target="_blank">José Guilherme Gurgel Barbosa</a></p>
            </div>
        </footer>
    )
}

export default Footer