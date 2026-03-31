// Day 1 - Q9: Implement debounce from scratch (Bonus)
// Write debounce(fn, delay) + extend with flush() method.

import { useState } from 'react'

export default function Day1_Debounce() {
  const [logs, setLogs] = useState<string[]>([])

  function debounce(fn: (...args: any[]) => void, delay: number) {
    // TODO: Implement debounce
    // Also add a .flush() method
    return fn
  }

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${msg}`])
  }

  const debouncedLog = debounce(addLog, 500)

  return (
    <div style={{ padding: 20 }}>
      <h3>Debounce from Scratch</h3>
      <p>Click rapidly — only the last click within 500ms should fire.</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => debouncedLog('clicked!')} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          Click Me (debounced)
        </button>
        <button onClick={() => addLog('flushed!')} style={{ padding: '8px 20px', background: '#f59e0b', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          Flush
        </button>
      </div>
      <div style={{ marginTop: 12 }}>
        {logs.map((log, i) => (
          <div key={i} style={{ color: '#4ecca3', fontSize: 14 }}>{log}</div>
        ))}
      </div>
    </div>
  )
}
