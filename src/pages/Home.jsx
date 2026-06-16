import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Typewriter from '../components/Typewriter'
import CountUp from '../components/CountUp'
import VisitorCounter from '../components/VisitorCounter'
import './pages.css'

function Home() {
  // useEffect -> change the browser tab title when this page opens.
  useEffect(() => {
    document.title = 'Home | Dipa & Sujit'
  }, [])

  return (
    <section className="page hero">
      <p className="eyebrow">React Final Project · 2026</p>
      <h1>
        Hi, we are <span className="accent">Dipa &amp; Sujit</span>
      </h1>

      {/* Animated typing line */}
      <h2 className="type-line">
        We build with <Typewriter />
      </h2>

      <p className="lead">
        A portfolio website built with React to show everything we learned
        this semester — components, hooks, routing, localStorage and more.
      </p>

      <div className="hero-actions">
        <Link className="btn" to="/projects">See our projects</Link>
        <Link className="btn btn-outline" to="/playground">Try the playground</Link>
      </div>

      {/* Animated count-up numbers */}
      <div className="stats-row">
        <CountUp end={6} label="Pages" />
        <CountUp end={9} label="Components" />
        <CountUp end={3} label="React Hooks" />
        <CountUp end={100} suffix="%" label="React" />
      </div>

      <VisitorCounter />
    </section>
  )
}

export default Home
