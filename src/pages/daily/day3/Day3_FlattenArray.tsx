// Day 3 - Q1: Flatten a Deeply Nested Array
// flattenDeep(arr) — no .flat() or .flatMap()

import { useState } from 'react'

export default function Day3_FlattenArray() {
  const [result, setResult] = useState('')

  function flattenDeep(arr: any[]): any[] {
    // Write your solution here
    return []
  }

  const handleRun = () => {
    const output = flattenDeep([1, [2, [3, [4]], 5], [6]])
    setResult(JSON.stringify(output))
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Flatten Deeply Nested Array</h3>
      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>Input: [1, [2, [3, [4]], 5], [6]]{'\n'}Expected: [1, 2, 3, 4, 5, 6]</pre>
      <button onClick={handleRun} style={{ marginTop: 12, padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
