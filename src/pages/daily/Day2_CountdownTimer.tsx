// Day 2 - Q5: useEffect Cleanup Timer (React)
// Build a countdown timer from 10 to 0 with pause/resume/reset.

import { useState, useEffect } from 'react'

export default function Day2_CountdownTimer() {
  const [count, setCount] = useState(10)
  const [running, setRunning] = useState(false)

  // TODO: useEffect with setInterval
  // - Count down when running
  // - Stop at 0, show "Time's up!"
  // - Cleanup on unmount
  // - Handle pause/resume without multiple intervals

  return (
    <div style={{ padding: 20 }}>
      <h3>Countdown Timer</h3>
      <div style={{ fontSize: 48, fontWeight: 'bold', color: count === 0 ? '#ef4444' : '#4ecca3', textAlign: 'center', margin: 20 }}>
        {count === 0 ? "Time's up!" : count}
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button onClick={() => setRunning(!running)} style={{ padding: '8px 20px', background: running ? '#f59e0b' : '#22c55e', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          {running ? 'Pause' : 'Resume'}
        </button>
        <button onClick={() => { setCount(10); setRunning(false) }} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          Reset
        </button>
      </div>
    </div>
  )
}
