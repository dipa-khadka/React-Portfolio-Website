import { useState, useEffect } from 'react'

// This To-Do list combines Week 9 (array state) with Week 12 (localStorage),
// so the tasks are SAVED even after you refresh the page.
function TodoList() {
  const [task, setTask] = useState('')     // text currently in the input box
  const [tasks, setTasks] = useState([])   // the full list of tasks (an array)

  // useEffect #1 -> runs once on load. Read saved tasks from localStorage.
  useEffect(() => {
    const saved = localStorage.getItem('tasks')
    if (saved) {
      setTasks(JSON.parse(saved))   // turn the saved text back into an array
    }
  }, [])

  // useEffect #2 -> runs every time "tasks" changes, and saves the new list.
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Add a new task to the array (spread keeps the old ones). (Week 9)
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: task, done: false }])
      setTask('')
    }
  }

  // filter() keeps every task EXCEPT the one we want to delete.
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  // map() flips done <-> not done for the clicked task only.
  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  return (
    <div className="demo-box">
      <h3>To-Do List (saved in localStorage)</h3>

      <div className="todo-input">
        <input
          type="text"
          value={task}
          placeholder="Type a task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="todo-list">
        {tasks.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggleTask(t.id)}
            />
            {/* If the task is done, cross it out (conditional styling) */}
            <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
              {t.text}
            </span>
            <button className="del-btn" onClick={() => deleteTask(t.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
