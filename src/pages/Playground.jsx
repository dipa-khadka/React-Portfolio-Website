import { useEffect } from 'react'
import Counter from '../components/Counter'
import TodoList from '../components/TodoList'
import './pages.css'
import './playground.css'

function Playground() {
  useEffect(() => { document.title = 'Playground | Dipa & Sujit' }, [])

  return (
    <section className="page">
      <h1>Playground</h1>
      <p className="lead">
        Live demos of the React hooks we learned. Try them out!
      </p>

      <div className="demo-grid">
        <Counter />
        <TodoList />
      </div>
    </section>
  )
}

export default Playground
