// Day 2 - Q2: Deep Clone an Object
// Write deepClone(obj) — true deep copy without JSON methods.

import { useState } from 'react'

export default function Day2_DeepClone() {
  const [result, setResult] = useState('')

  function deepClone(obj: any): any {
    // Write your solution here (no JSON.parse/stringify, no structuredClone)
    return obj
  }

  const handleRun = () => {
    const original = { a: 1, b: { c: 2, d: [3, 4] } }
    const cloned = deepClone(original)
    cloned.b.c = 99
    cloned.b.d.push(5)
    setResult(`Original: ${JSON.stringify(original)}\nCloned: ${JSON.stringify(cloned)}\nNo shared refs: ${original.b.c !== cloned.b.c ? 'PASS' : 'FAIL'}`)
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Deep Clone an Object</h3>
      <p>Clone should have no shared references with original.</p>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8, whiteSpace: 'pre-wrap' }}>{result}</pre>}
    </div>
  )
}
