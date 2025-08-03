// Import React
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import Pages


// Import Context
import { LibraryJsonProvider } from './contexts/LibraryJsonContext'

// Function
const App = () => {
  return (
    <LibraryJsonProvider>
      {/* Routes */}
      <Router>
        <Routes>
          <Route path="/" element={<></>} /> {/* Home */}
          <Route path="/Library" element={<></>} /> {/* Library */}
          <Route path="/About" element={<></>} /> {/* About */}
        </Routes>
      </Router>
    </LibraryJsonProvider>
  )
}

export default App