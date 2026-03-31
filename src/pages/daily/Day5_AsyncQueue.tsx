// Day 5 - Q1: Async Task Queue
// Process async tasks with concurrency limit.

import { useState } from 'react'

export default function Day5_AsyncQueue() {
  const [logs, setLogs] = useState<string[]>([])

  // TODO: class AsyncQueue { constructor(concurrency), add(task) }

  const handleRun = async () => {
    setLogs([])
    const addLog = (msg: string) => setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${msg}`])

    // const queue = new AsyncQueue(2)
    // queue.add(() => new Promise(r => { addLog('Task 1 start'); setTimeout(() => { addLog('Task 1 done'); r('1') }, 1000) }))
    // queue.add(() => new Promise(r => { addLog('Task 2 start'); setTimeout(() => { addLog('Task 2 done'); r('2') }, 500) }))
    // queue.add(() => new Promise(r => { addLog('Task 3 start'); setTimeout(() => { addLog('Task 3 done'); r('3') }, 300) }))

    addLog('Implement AsyncQueue class above')
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Async Task Queue</h3>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      <div style={{ marginTop: 12 }}>{logs.map((l, i) => <div key={i} style={{ color: '#4ecca3', fontSize: 14 }}>{l}</div>)}</div>
    </div>
  )
}
