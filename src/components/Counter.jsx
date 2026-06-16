import { useState } from 'react'

// A small counter to demonstrate the useState hook. (Week 7)
function Counter() {
  // count = the current number, setCount = the function that changes it
  const [count, setCount] = useState(0)

  return (
    <div className="demo-box">
      <h3>Counter (useState)</h3>
      <p className="count-number">{count}</p>
      <div className="demo-actions">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  )
}

export default Counter
