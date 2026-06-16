import { useState, useEffect } from 'react'

// A number that counts up from 0 to "end" when the page loads.
function CountUp({ end, label, suffix = '' }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    let current = 0
    const step = Math.ceil(end / 30)        // how much to add each tick
    const timer = setInterval(() => {
      current += step
      if (current >= end) {
        current = end
        clearInterval(timer)                // stop when we reach the end
      }
      setN(current)
    }, 40)
    return () => clearInterval(timer)
  }, [end])

  return (
    <div className="stat">
      <div className="stat-num">{n}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default CountUp
