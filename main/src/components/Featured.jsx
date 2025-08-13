// Import React
import React from 'react'

// Components
import Card from "./Card";

// Functions
const Featured = ({subtopics}) => {
    if (subtopics.length != 3) return

    for (let init = 0; init < 3; init++) {
        if (Object.keys(subtopics[init]).length == 0) return
    }

    return (
        <div className="max-[650px]:hidden w-full h-auto mt-[20px] flex justify-between items-center">
            {subtopics.map((subtopic, index)=><Card subtopic={subtopic} key={index} />)}
        </div>
        
    )
}

export default Featured