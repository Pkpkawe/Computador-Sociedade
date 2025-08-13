// Import React
import React from 'react'
import { useState, useRef, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'

// Icons
import MenuWhite from '../assets/icons/menu_white.svg'
import MenuBlack from '../assets/icons/menu_black.svg'
import Home from '../assets/icons/home.svg'
import Library from '../assets/icons/library.svg'
import About from '../assets/icons/about.svg'

// Component
import InfoPesquisado from '../components/InfoPesquisado'

// Contexts
import { LibraryJsonContext } from '../contexts/LibraryJsonContext'

// Base_Url
const base_url = import.meta.env.BASE_URL

// Function
const NavBar = () => {
    const {LibraryJSON} = useContext(LibraryJsonContext)
    const InputSearch = useRef(null)
    const [stateMenu, setStateMenu] = useState('hidden')
    const navigate = useNavigate()
    const [subtopics, setSubtopics] = useState([])
    const [searchValue, setSearchValue] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if (InputSearch.current.value != "") {

            InputSearch.current.value = ""
            setSearchValue("")
            InputSearch.current.blur()
            
            navigate(`${base_url}info?search=${subtopics[0].title}`)
        }
    }
    
    const handleOnChange = (event) => {
        const value = event.target.value
        setSearchValue(value)
        
        if (!value) {
            setSubtopics([])
        }
        
        const results = []
        for (const topic of LibraryJSON) {
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
            <ul className="w-3/10 flex max-[950px]:hidden justify-between items-center">
                <li className="text-[1.4rem] text-white font-bold"><Link to={base_url}>Início</Link></li>
                <li className="text-[1.4rem] text-white font-bold"><Link to={base_url + "library"}>Biblioteca</Link></li>
                <li className="text-[1.4rem] text-white font-bold"><Link to={base_url + "about"}>Sobre</Link></li>
            </ul>
            <div className="z-2 relative hidden max-[950px]:flex flex-col w-1/3 max-[475px]:w-auto rounded-[5px]" >
                <button className={`${stateMenu == 'hidden' ? "bg-transparent" : "bg-[#FFFFFF] border"} rounded-[5px] hover:cursor-pointer`} onClick={() => stateMenu == 'hidden' ? setStateMenu('flex') : setStateMenu('hidden')}>
                    <img className='h-full aspect-square' src={stateMenu == 'hidden' ? MenuWhite : MenuBlack } alt="Icone Menu" />
                </button>

                <div className={`${stateMenu} absolute top-[150%] max-[475px]:w-auto w-full p-[10px] max-[475px]:p-[5px] bg-[#FFFFFF] border rounded-[5px] shadow-lg transition-all`}>
                    <ul className="w-full flex flex-col justify-between gap-[10px]">
                        <li className="text-[1.2rem] max-[575px]:text-[0.9rem] font-bold" onClick={() => setStateMenu("hidden")}>
                            <Link className="flex items-center gap-[10px]" to="/">
                                <img src={Home} alt="Ícone Início" />
                                <p className='max-[475px]:hidden'>Início</p>
                            </Link>
                        </li>
                        <hr className='w-full'/>
                        <li className="text-[1.2rem] max-[575px]:text-[0.9rem] font-bold" onClick={() => setStateMenu("hidden")}>
                            <Link className="flex items-center gap-[10px]" to="/library">
                                <img src={Library} alt="Ícone Biblioteca" />
                                <p className='max-[475px]:hidden'>Biblioteca</p>
                            </Link>
                        </li>
                        <hr className='w-full'/>
                        <li className="text-[1.2rem] max-[575px]:text-[0.9rem] font-bold" onClick={() => setStateMenu("hidden")}>
                            <Link className="flex items-center gap-[10px]" to="/about">
                                <img src={About} alt="Ícone Sobre" />
                                <p className='max-[475px]:hidden'>Sobre</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


            <form action="" method="post" onSubmit={handleSubmit} className='relative w-2/5 max-[950px]:w-3/5'>
                <input ref={InputSearch} onChange={handleOnChange} type="text" className="box-border bg-[url(/src/assets/icons/search.svg)] bg-white bg-size-[30px] bg-no-repeat bg-position-[10px] w-full p-[8px] pl-[45px] rounded-full outline-none shadow-md"  placeholder="Pesquisar" />

                <div className={`${searchValue ? "flex" : "hidden"} absolute z-1 top-[130%] w-full flex-col gap-[10px]`}>
                    {
                        subtopics.map((subtopic, index) => {
                            return <InfoPesquisado key={index} subtopic={subtopic} input={InputSearch} setSearchValue={setSearchValue} />
                        })
                    }
                </div>
            </form>
        </nav>
    )
}

export default NavBar