import { Link } from 'react-router-dom'
import './ProjectCard.css'

// ProjectCard is a REUSABLE component. It gets its data through props.
// The whole card is a Link that opens that project's detail page.
function ProjectCard({ id, title, emoji, description, tech }) {
  return (
    <Link to={`/projects/${id}`} className="card project-card">
      <div className="project-emoji">{emoji}</div>
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tags">
        {/* .map() turns the tech array into small tag labels */}
        {tech.map((t, i) => (
          <span key={i} className="tag">{t}</span>
        ))}
      </div>

      <span className="view-link">View details →</span>
    </Link>
  )
}

export default ProjectCard
