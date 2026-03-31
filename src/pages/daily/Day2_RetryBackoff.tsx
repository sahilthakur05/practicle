// Day 2 - Q3: Retry with Exponential Backoff
// retry(fn, retries, delay) — retries an async fn with doubling delay.

import { useState } from 'react'

export default function Day2_RetryBackoff() {
  const [logs, setLogs] = useState<string[]>([])

  async function retry(fn: () => Promise<any>, retries: number, delay: number): Promise<any> {
    // Write your solution here
    return fn()
  }

  const handleRun = async () => {
    setLogs([])
    let attempt = 0
    const unreliable = () => new Promise((resolve, reject) => {
      attempt++
      const msg = `Attempt ${attempt} at ${new Date().toLocaleTimeString()}`
      setLogs(prev => [...prev, msg])
      if (attempt < 3) reject(new Error('Failed'))
      else resolve('Success!')
    })

    try {
      const result = await retry(unreliable, 3, 1000)
      setLogs(prev => [...prev, `Result: ${result}`])
    } catch (err: any) {
      setLogs(prev => [...prev, `Final error: ${err.message}`])
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Retry with Exponential Backoff</h3>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      <div style={{ marginTop: 12 }}>
        {logs.map((log, i) => <div key={i} style={{ color: '#4ecca3', fontSize: 14, padding: 2 }}>{log}</div>)}
      </div>
    </div>
  )
}
