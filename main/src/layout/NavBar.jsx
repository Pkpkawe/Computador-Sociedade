// Import React
import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Component
import InfoPesquisado from '../components/InfoPesquisado'

// Function
const NavBar = () => {
    const InputSearch = useRef(null)
    const navigate = useNavigate()
    const [subtopics, setSubtopics] = useState([])
    const [searchValue, setSearchValue] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/info?search=${subtopics[0].title}`)
    }
    
    const handleOnChange = (event) => {
        const value = event.target.value
        setSearchValue(value)

        if (!value) {
          setSubtopics([])
        }
        
        const results = []
        for (const topic of LibraryJson) {
            for (const subtopic of topic.subtopics) {
                if (subtopic.title.toLowerCase().includes(value.toLowerCase())) {
                    if (results.length < 3) {
                        results.push(subtopic)
                    } else break
                }
            }
            if (results.length >= 3) break
        }
        setSubtopics(results)
    }

    return (
        <nav className="z-2 bg-color-1 w-full h-full pl-[4%] pr-[4%] flex justify-between items-center shadow-md">
            <ul className="w-3/10 flex justify-between items-center">
                <li className="text-[1.2rem] text-white font-bold">Início</li>
                <li className="text-[1.2rem] text-white font-bold">Biblioteca</li>
                <li className="text-[1.2rem] text-white font-bold">Sobre</li>
            </ul>
            <form action="" method="post" onSubmit={handleSubmit} className='relative w-2/5'>
                <input ref={InputSearch} onChange={handleOnChange} type="text" className="box-border bg-[url(/src/assets/icons/search.svg)] bg-white bg-size-[30px] bg-no-repeat bg-position-[10px] w-full p-[8px] pl-[45px] rounded-full outline-none shadow-md"  placeholder="Pesquisar" />

                <div className={`${searchValue ? "flex" : "hidden"} absolute top-[130%] w-full flex-col gap-[10px]`}>
                    {
                        subtopics.map((subtopic, index) => {
                            return <InfoPesquisado index={index} subtopic={subtopic} />
                        })
                    }
                </div>
            </form>
        </nav>
    )
}

export default NavBar