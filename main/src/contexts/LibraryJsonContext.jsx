// Import React
import React from 'react'
import { createContext } from 'react'

// Create Context
export const LibraryJsonContext = createContext()

// Import Json
import JSON from '../../library.json'

// Function
export const LibraryJsonProvider = ({ children }) => {
    const LibraryJSON = JSON

    return (
        <LibraryJsonContext.Provider value={{LibraryJSON}}>
            {children}
        </LibraryJsonContext.Provider>
    )
}