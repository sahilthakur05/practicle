// Day 4 - Q2: Event Emitter
// on, off, emit, once methods.

import { useState } from 'react'

export default function Day4_EventEmitter() {
  const [logs, setLogs] = useState<string[]>([])

  // TODO: class EventEmitter { on, off, emit, once }

  const handleRun = () => {
    // const emitter = new EventEmitter()
    // emitter.on("greet", (name) => addLog(`Hello ${name}`))
    // emitter.emit("greet", "Sahil")
    setLogs(['Implement EventEmitter class above'])
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Event Emitter</h3>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      <div style={{ marginTop: 12 }}>{logs.map((l, i) => <div key={i} style={{ color: '#4ecca3', fontSize: 14 }}>{l}</div>)}</div>
    </div>
  )
}
