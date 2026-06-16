import { useState, useEffect } from 'react'

// One animated skill bar. Gets name, level (0-100) and an icon as props.
function SkillBar({ name, level, icon }) {
  const [width, setWidth] = useState(0)

  // Grow the bar from 0 to the real level so the CSS transition animates.
  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 200)
    return () => clearTimeout(timer)
  }, [level])

  // Small label based on the level (conditional logic).
  const tag = level >= 85 ? 'Advanced' : level >= 70 ? 'Intermediate' : 'Beginner'

  return (
    <div className="skill">
      <div className="skill-top">
        <span className="skill-name">
          <span className="skill-icon">{icon}</span> {name}
        </span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: width + '%' }}></div>
      </div>
      <span className={'skill-tag ' + tag.toLowerCase()}>{tag}</span>
    </div>
  )
}

export default SkillBar
