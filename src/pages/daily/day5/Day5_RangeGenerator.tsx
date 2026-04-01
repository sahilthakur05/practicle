// Day 5 - Q3: Range Generator
// Generator function range(start, end, step) using function*.

import { useState } from 'react'

export default function Day5_RangeGenerator() {
  const [result, setResult] = useState('')

  function* range(start: number, end: number, step = 1): Generator<number> {
    // Write your solution here
  }

  const handleRun = () => {
    const nums: number[] = []
    for (const n of range(0, 10, 3)) nums.push(n)
    setResult(`range(0, 10, 3) → [${nums.join(', ')}]\nExpected: [0, 3, 6, 9]`)
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Range Generator</h3>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
