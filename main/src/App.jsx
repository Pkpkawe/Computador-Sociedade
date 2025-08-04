// Import React
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Import Pages
import Home from './pages/Home'
import Library from './pages/Library'
import Info from './pages/Info'

// Import Context
import { LibraryJsonProvider } from './contexts/LibraryJsonContext'

// Function
const App = () => {
  return (
    <LibraryJsonProvider>
      {/* Routes */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home */}
          <Route path="/library" element={<Library />} /> {/* Library */}
          <Route path="/about" element={<></>} /> {/* About */}
          <Route path="/info" element={<Info />} /> {/* Info */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </LibraryJsonProvider>
  )
}

export default App