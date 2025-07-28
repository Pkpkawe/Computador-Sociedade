// Import React
import React from 'react'
import { useState } from 'react'

// Import Assets
import ArrowIcon from '../assets/icons/arrow.svg'

// Function
const TopicTree = ({TopicName, SubtopicsList}) => {
    const [rotate, setRotate] = useState("rotate-180")

    const handleToggle = () => {
        if (rotate == "rotate-180") {
            setRotate("rotate-270")
            return
        }
        setRotate("rotate-180")
    }

    return (
        <>
            <div className="flex flex-col text-[1.1rem] text-left">
                <div className="flex items-center gap-[5px]">
                    <button className={`h-1/2 aspect-square ${rotate}`} onClick={handleToggle}>
                        <img src={ArrowIcon} className="h-full aspect-square" />
                    </button>
                    <h2>{TopicName}</h2>
                </div>
                <div className={`flex-col pl-[30px] ${rotate == "rotate-180" ? "hidden" : "flex"}`}>
                    {SubtopicsList.map((Subtopic, index) => {
                        return <p key={index}>{Subtopic.title}</p>
                    })}
                </div>
            </div>
        </>
    )
}

export default TopicTree