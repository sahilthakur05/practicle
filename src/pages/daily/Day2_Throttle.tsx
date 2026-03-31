// Day 2 - Q9: Implement throttle from scratch (Bonus)
// throttle(fn, limit) — fires immediately, ignores calls for next `limit` ms.

import { useState } from 'react'

export default function Day2_Throttle() {
  const [logs, setLogs] = useState<string[]>([])

  function throttle(fn: (...args: any[]) => void, limit: number) {
    // TODO: Implement throttle
    // Bonus: Support trailing option
    return fn
  }

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${msg}`])
  }

  const throttledLog = throttle(addLog, 1000)

  return (
    <div style={{ padding: 20 }}>
      <h3>Throttle from Scratch</h3>
      <p>Click rapidly — first click fires immediately, then ignores for 1s.</p>
      <button onClick={() => throttledLog('clicked!')} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
        Click Me (throttled)
      </button>
      <div style={{ marginTop: 12 }}>
        {logs.map((log, i) => <div key={i} style={{ color: '#4ecca3', fontSize: 14 }}>{log}</div>)}
      </div>
    </div>
  )
}
