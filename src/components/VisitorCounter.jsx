import { useState, useEffect } from 'react'

// Counts how many times the website has been opened, using localStorage.
function VisitorCounter() {
  const [visits, setVisits] = useState(0)

  // useEffect runs once on load: read the old count, add 1, save it back.
  useEffect(() => {
    const old = Number(localStorage.getItem('visits')) || 0
    const updated = old + 1
    localStorage.setItem('visits', updated)
    setVisits(updated)
  }, [])

  return (
    <div className="visitor-chip">
      👀 You have opened this site <strong>{visits}</strong> time(s)
    </div>
  )
}

export default VisitorCounter
