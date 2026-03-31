// Day 1 - Q5: Stale Closure Bug (React)
// Fix the stale closure issue in the Counter component.

import { useState, useRef } from 'react'

export default function Day1_StaleClosure() {
  // BUG VERSION — fix this:
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    setTimeout(() => {
      alert("Count is: " + count)
    }, 2000)
  }

  // TODO: Write a fixed version using:
  // 1. Functional update: setCount(prev => prev + 1) + useRef
  // 2. Or useRef to track the latest value

  return (
    <div style={{ padding: 20 }}>
      <h3>Stale Closure Bug</h3>
      <p>Click the button 3 times quickly. The alert shows stale values. Fix it!</p>
      <button
        onClick={handleClick}
        style={{ padding: '10px 24px', fontSize: 16, background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
      >
        Click ({count})
      </button>
      <p style={{ color: '#888', marginTop: 12 }}>Alert will show after 2 seconds</p>
    </div>
  )
}
