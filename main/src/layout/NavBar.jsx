// Import React
import React from 'react'

// Function
const NavBar = () => {
    return (
        <nav className="z-2 bg-color-1 w-full h-full pl-[4%] pr-[4%] flex justify-between items-center shadow-md">
            <ul className="w-3/10 flex justify-between items-center">
                <li className="text-[1.2rem] text-white font-bold">Início</li>
                <li className="text-[1.2rem] text-white font-bold">Biblioteca</li>
                <li className="text-[1.2rem] text-white font-bold">Sobre</li>
            </ul>
            <input type="text" className="box-border bg-[url(/src/assets/icons/search.svg)] bg-white bg-size-[30px] bg-no-repeat bg-position-[10px] w-[40%] p-[8px] pl-[45px] rounded-full outline-none shadow-md"  placeholder="Pesquisar" />
        </nav>
    )
}

export default NavBar