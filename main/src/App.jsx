// Import React
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Import Pages
import Home from './pages/Home'
import Library from './pages/Library'
import Info from './pages/Info'
import Page404 from './pages/erros/404'

// Import Context
import { LibraryJsonProvider } from './contexts/LibraryJsonContext'
import About from './pages/About'

//consts
const base_url = import.meta.env.BASE_URL

// Function
const App = () => {
  return (
    <LibraryJsonProvider>
      {/* Routes */}
      <Router>
        <Routes>
          <Route path={base_url} element={<Home />} /> {/* Home */}
          <Route path="/library" element={<Library />} /> {/* Library */}
          <Route path="/about" element={<About />} /> {/* About */}
          <Route path="/info" element={<Info />} /> {/* Info */}
          <Route path="*" element={<Page404/>} />
        </Routes>
      </Router>
    </LibraryJsonProvider>
  )
}

export default App