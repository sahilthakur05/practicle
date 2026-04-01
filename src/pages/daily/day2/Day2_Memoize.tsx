// Day 2 - Q4: Memoize Function
// Write memoize(fn) that caches results based on arguments.

import { useState } from 'react'

export default function Day2_Memoize() {
  const [logs, setLogs] = useState<string[]>([])

  function memoize<T extends (...args: any[]) => any>(fn: T): T {
    // Write your solution here
    return fn
  }

  const handleRun = () => {
    setLogs([])
    const add = memoize((a: number, b: number) => {
      setLogs(prev => [...prev, `computing ${a} + ${b}...`])
      return a + b
    })
    const r1 = add(1, 2)
    setLogs(prev => [...prev, `add(1,2) = ${r1}`])
    const r2 = add(1, 2)
    setLogs(prev => [...prev, `add(1,2) = ${r2} (should be cached)`])
    const r3 = add(2, 3)
    setLogs(prev => [...prev, `add(2,3) = ${r3}`])
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Memoize Function</h3>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      <div style={{ marginTop: 12 }}>
        {logs.map((log, i) => <div key={i} style={{ color: '#4ecca3', fontSize: 14, padding: 2 }}>{log}</div>)}
      </div>
    </div>
  )
}
