// Import React
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Import Assets
import ArrowIcon from '../assets/icons/arrow.svg'

// Components
import ModalBook from './ModalBook'

// Function
const TopicTree = ({Topic, Tags, SetTags}) => {
    const navigate = useNavigate()
    const [rotate, setRotate] = useState("rotate-180")
    const [stateModalBook, setStateModalBook] = useState("hidden")
    
    const handleToggle = () => {
        if (rotate == "rotate-180" && !Tags.includes(Topic)) {
            setRotate("rotate-270")
            SetTags([...Tags, Topic])
            return
        }
        setRotate("rotate-180")
        const novaTags = Tags.filter((tag) => tag !== Topic )
        SetTags(novaTags)

    }

    useEffect(() => {
        if (rotate == "rotate-270" && !Tags.includes(Topic)) {
            setRotate("rotate-180")
        }
    })

    
    const handleModalBook = () => {
        if (stateModalBook == "hidden") {
            setStateModalBook("flex")
            return
        }
        setStateModalBook("hidden")
    }

    return (
        <>
            <div className="flex flex-col text-left gap-[8px]">
                <div className="flex items-center gap-[5px]">
                    <button className={`h-[20px] aspect-square ${rotate} hover:cursor-pointer transition-all duration-[0.1s]`} onClick={handleToggle}>
                        <img src={ArrowIcon} className="w-full aspect-square" />
                    </button>
                    <h2 className='text-[1.15rem] font-medium'>{Topic.name}</h2>
                </div>
                <div className={`flex flex-col gap-[8px] pl-[30px] ${rotate == "rotate-180" ? "hidden" : ""}`}>
                    {Topic.subtopics.map((Subtopic, index) => {
                        return (
                            <>
                                <p key={index} className='text-[1.05rem] hover:cursor-pointer' onClick={handleModalBook}>{Subtopic.title}</p>
                                
                                <ModalBook state={stateModalBook} setState={setStateModalBook} subtopic={Subtopic} /> 
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default TopicTree