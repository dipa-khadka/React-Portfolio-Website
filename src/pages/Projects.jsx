import { useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import './pages.css'

function Projects() {
  useEffect(() => { document.title = 'Projects | Dipa & Sujit' }, [])

  return (
    <section className="page">
      <h1>Our Projects</h1>
      <p className="lead">
        Projects we built while learning React. Click a card to see details.
      </p>

      <div className="grid">
        {/* .map() over the array and send each project to ProjectCard via props */}
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            id={p.id}
            title={p.title}
            emoji={p.emoji}
            description={p.description}
            tech={p.tech}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
