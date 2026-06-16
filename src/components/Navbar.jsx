import { NavLink } from 'react-router-dom'
import './Navbar.css'

// Navbar receives darkMode + toggleDarkMode as PROPS from App.jsx.
function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <h2 className="logo">
        D<span className="amp">&amp;</span>S <span className="logo-portfolio">Portfolio</span>
      </h2>

      <div className="nav-links">
        {/* NavLink gives the CURRENT page link an "active" class (Week 15) */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/playground">Playground</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        {/* Button that switches the theme. Its label changes with the state. */}
        <button className="theme-btn" onClick={toggleDarkMode}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
