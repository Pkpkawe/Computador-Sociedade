// Import React
import React from 'react'
import { useState } from 'react'

// Components
import ModalBook from './ModalBook'

// Function
const Book = ({subtopic}) => {
    const [stateModalBook, setStateModalBook] = useState("hidden")
    
    const handleModalBook = () => {
        if (stateModalBook == "hidden") {
            setStateModalBook("flex")
            return
        }
        setStateModalBook("hidden")
    }


    return (
        <>
            <div className="min-w-[150px] w-full max-w-[200px] aspect-[3/4] flex flex-col rounded-[10px] shadow-md/20 hover:cursor-pointer" onClick={handleModalBook}>
                <img src={subtopic.image} alt="Foto do Subtópico" className="object-cover w-full h-full rounded-[10px]" />
            </div>
            <ModalBook state={stateModalBook} setState={setStateModalBook} subtopic={subtopic} /> 

        </>
    )
}

export default Book