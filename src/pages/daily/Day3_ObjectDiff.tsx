// Day 3 - Q2: Object Difference
// diff(obj1, obj2) — return keys where values differ.

import { useState } from 'react'

export default function Day3_ObjectDiff() {
  const [result, setResult] = useState('')

  function diff(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any> {
    // Write your solution here
    return {}
  }

  const handleRun = () => {
    const output = diff(
      { name: "Sahil", age: 24, city: "Delhi" },
      { name: "Sahil", age: 25, city: "Mumbai" }
    )
    setResult(JSON.stringify(output, null, 2))
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Object Difference</h3>
      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>Expected: {'{ age: 25, city: "Mumbai" }'}</pre>
      <button onClick={handleRun} style={{ marginTop: 12, padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
