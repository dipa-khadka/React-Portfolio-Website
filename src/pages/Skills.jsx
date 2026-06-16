import { useEffect } from 'react'
import SkillBar from '../components/SkillBar'
import './pages.css'

// Our skills as an array. We .map() over it to show one SkillBar each.
const skills = [
  { name: 'HTML & CSS', level: 90, icon: '🎨' },
  { name: 'JavaScript', level: 80, icon: '⚡' },
  { name: 'React (components & hooks)', level: 78, icon: '⚛️' },
  { name: 'React Router', level: 72, icon: '🧭' },
  { name: 'Git & GitHub', level: 68, icon: '🔧' },
  { name: 'Problem Solving', level: 75, icon: '🧠' },
]

function Skills() {
  useEffect(() => { document.title = 'Skills | Dipa & Sujit' }, [])

  return (
    <section className="page">
      <h1>Our Skills</h1>
      <p className="lead">What we can do after this semester.</p>

      <div className="card skills-card">
        {skills.map((s, i) => (
          <SkillBar key={i} name={s.name} level={s.level} icon={s.icon} />
        ))}
      </div>
    </section>
  )
}

export default Skills
