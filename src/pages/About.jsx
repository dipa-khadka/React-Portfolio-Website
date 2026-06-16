import { useEffect } from 'react'
import './pages.css'

// What we learned. We .map() over it below to show it on screen.
const learned = [
  'Components & props',
  'useState hook',
  'useEffect hook',
  'localStorage',
  'React Router (multi-page)',
  'CSS styling & dark mode',
]

// The two team members, stored as data.
const team = [
  { initial: 'D', name: 'Dipa', id: '2530076', role: '(React Developer) ' },
  { initial: 'S', name: 'Sujit Shrestha', id: '2530027', role: '(React Developer)' },
]

function About() {
  useEffect(() => { document.title = 'About | Dipa & Sujit' }, [])

  return (
    <section className="page">
      <h1>About Us</h1>
      <p className="lead">
        We are two students who built this website as our final project,
        which replaces the final exam.
      </p>

      <div className="team">
        {team.map((m, i) => (
          <div className="card member" key={i}>
            <div className="avatar">{m.initial}</div>
            <h3>{m.name}</h3>
            <p className="role">{m.role}</p>
            <p className="member-id">ID: {m.id}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">What we learned</h2>
      <div className="learned-list">
        {/* .map() turns the array into items with a red check icon */}
        {learned.map((item, index) => (
          <div className="learn-item" key={index}>
            <span className="check">✓</span> {item}
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
