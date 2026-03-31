// Day 6 - Q4: Object.freeze Deep
// deepFreeze(obj) — recursively freeze, handle circular refs.

import { useState } from 'react'

export default function Day6_DeepFreeze() {
  const [result, setResult] = useState('')

  function deepFreeze(obj: any, seen = new WeakSet()): any {
    // Write your solution here
    return obj
  }

  const handleRun = () => {
    const obj = { a: 1, b: { c: [2, 3] } }
    deepFreeze(obj)
    try {
      obj.b.c.push(4)
      setResult('FAIL: Mutation was allowed')
    } catch (e: any) {
      setResult(`PASS: ${e.message}`)
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Deep Freeze</h3>
      <p>Freeze should prevent nested mutations.</p>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
