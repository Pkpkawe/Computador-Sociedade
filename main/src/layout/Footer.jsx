// Import React
import React from 'react'

// Function
const Footer = () => {
    return (
        <footer className='bg-color-1 w-full max-h-[270px] h-[270px] flex flex-col justify-center items-center gap-[30px]'>
            <div className='text-center flex flex-col items-center gap-[15px]'>
                <h1 className='text-[1.3rem] text-white font-bold'>Computador&Sociedade</h1>
                <p className='w-[60%] text-[1.1rem] text-white'>Um blog criado para o trabalho de Sociologia do 2º bimestre dos alunos do IFRN, projeto coordenado pelo professor da matéria de Sociologia 2: Eliaquim Timóteo.</p>
            </div>
            <hr className='bg-white w-[95%] h-[1.5px] border-none'/>
            <div className='w-[85%] text-center flex justify-between gap-[10px]'>
                <p className='text-[1.1rem] text-white font-semibold'><a href="https://github.com/Pkpkawe/" target="_blank">Pietro Kawê Silva Oliveira</a></p>
                <p className='text-[1.1rem] text-white font-semibold'><a href="https://github.com/PedroLopes30/" target="_blank">Pedro Henrique Lopes da Silva</a></p>
                <p className='text-[1.1rem] text-white font-semibold'><a href="https://github.com/Jose-GuilhermeG/" target="_blank">José Guilherme Gurgel Barbosa</a></p>
            </div>
        </footer>
    )
}

export default Footer