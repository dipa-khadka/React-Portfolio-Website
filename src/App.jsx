import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Playground from './pages/Playground'
import Contact from './pages/Contact'
import './App.css'

// App is the main component. It controls dark mode AND all the page routes.
function App() {
  // useState -> remembers the theme. We start with dark = true (dark by default).
  const [darkMode, setDarkMode] = useState(true)

  // useEffect with [] -> runs once on load. Reads the saved theme from
  // localStorage so the user's choice stays after refreshing the page.
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true')
    }
  }, [])

  // Switches the theme and saves the new value to localStorage.
  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', newMode)
  }

  return (
    // Add the "dark" class only when darkMode is true. The CSS then swaps colors.
    <div className={darkMode ? 'app dark' : 'app'}>
      {/* HashRouter works like BrowserRouter (Routes / Route / NavLink),
          it just adds a # so the site also works on GitHub Pages. */}
      <HashRouter>
        {/* Pass darkMode + the toggle function DOWN to Navbar using props */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            {/* :id is a changing part of the URL. ProjectDetail reads it
                with useParams to know which project to show. (Week 13-15) */}
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
