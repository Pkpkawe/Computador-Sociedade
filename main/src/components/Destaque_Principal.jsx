// Import React
import React from 'react'

// Images
import DestaquePrincipal from '../assets/img/Destaque_Principal.png'

// Function
const Destaque_Principal = () => {
    return (
        <div class="relative w-full">
            <img src={DestaquePrincipal} alt="Foto do Destaque Principal" class="object-cover w-full min-h-[400px] max-h-[550px]" />
            <div class="absolute bottom-[0] bg-[#C1C1C18F] w-full p-[10px] text-[1.1rem] font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est labore consequatur alias dolorum deserunt enim. Obcaecati quas hic tempore vero ipsum cupiditate accusantium aut, id culpa recusandae magni est.</div>
        </div>
    )
}

export default Destaque_Principal