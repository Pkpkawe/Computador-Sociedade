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

// Base_Url
const base_url = import.meta.env.BASE_URL

// Function
const App = () => {
  return (
    <LibraryJsonProvider>
      {/* Routes */}
      <Router>
        <Routes>
          <Route path={base_url} element={<Home />} /> {/* Home */}
          <Route path={base_url + "library"} element={<Library />} /> {/* Library */}
          <Route path={base_url + "about"} element={<About />} /> {/* About */}
          <Route path={base_url + "info"} element={<Info />} /> {/* Info */}
          <Route path="*" element={<Page404/>} />
        </Routes>
      </Router>
    </LibraryJsonProvider>
  )
}

export default App