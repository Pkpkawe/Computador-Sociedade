// Import React
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import Pages


// Function
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<></>} /> {/* Home */}
        <Route path="/Library" element={<></>} /> {/* Library */}
        <Route path="/About" element={<></>} /> {/* About */}
      </Routes>
    </Router>
  )
}

export default App