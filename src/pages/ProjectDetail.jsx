import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './pages.css'

function ProjectDetail() {
  // useParams reads the :id part from the URL, e.g. /projects/todo-list
  const { id } = useParams()

  // Find the matching project from our shared data.
  const project = projects.find((p) => p.id === id)

  useEffect(() => {
    document.title = (project ? project.title : 'Project') + ' | Dipa & Sujit'
  }, [project])

  // If someone types a wrong URL, show a friendly message.
  if (!project) {
    return (
      <section className="page">
        <h1>Project not found</h1>
        <Link className="btn" to="/projects">← Back to projects</Link>
      </section>
    )
  }

  return (
    <section className="page">
      <Link className="back-link" to="/projects">← Back to projects</Link>

      <div className="detail-head">
        <span className="detail-emoji">{project.emoji}</span>
        <h1>{project.title}</h1>
      </div>

      <p className="lead">{project.description}</p>

      <div className="card">
        <h3>What we learned</h3>
        <p>{project.details}</p>

        <div className="tags" style={{ marginTop: '14px' }}>
          {project.tech.map((t, i) => (
            <span key={i} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
