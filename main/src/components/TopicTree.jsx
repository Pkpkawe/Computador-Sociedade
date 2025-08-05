// Import React
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Import Assets
import ArrowIcon from '../assets/icons/arrow.svg'

// Function
const TopicTree = ({TopicName, SubtopicsList}) => {
    const navigate = useNavigate()
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
            <div className="flex flex-col text-left">
                <div className="flex items-center gap-[5px]">
                    <button className={`h-[20px] aspect-square ${rotate} hover:cursor-pointer`} onClick={handleToggle}>
                        <img src={ArrowIcon} className="w-full aspect-square" />
                    </button>
                    <h2 className='text-[1.15rem] font-medium'>{TopicName}</h2>
                </div>
                <div className={`flex-col gap-[7px] pl-[30px] ${rotate == "rotate-180" ? "hidden" : "flex"}`}>
                    {SubtopicsList.map((Subtopic, index) => {
                        return <p key={index} className='text-[1.05rem] hover:cursor-pointer' onClick={() => navigate(`/info?search=${Subtopic.title}`)}>{Subtopic.title}</p>
                    })}
                </div>
            </div>
        </>
    )
}

export default TopicTree