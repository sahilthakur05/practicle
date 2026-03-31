// Day 5 - Q2: Promise.allSettled Implementation
// Always resolves with array of { status, value/reason }.

import { useState } from 'react'

export default function Day5_PromiseAllSettled() {
  const [result, setResult] = useState('')

  function promiseAllSettled(promises: Promise<any>[]): Promise<any[]> {
    // Write your solution here
    return Promise.resolve([])
  }

  const handleRun = async () => {
    const output = await promiseAllSettled([
      Promise.resolve(1),
      Promise.reject("error"),
      Promise.resolve(3),
    ])
    setResult(JSON.stringify(output, null, 2))
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Promise.allSettled</h3>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
