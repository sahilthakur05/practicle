// Day 4 - Q3: Deep Equal
// deepEqual(a, b) — check deep equality without JSON.stringify.

import { useState } from 'react'

export default function Day4_DeepEqual() {
  const [result, setResult] = useState('')

  function deepEqual(a: any, b: any): boolean {
    // Write your solution here
    return a === b
  }

  const handleRun = () => {
    const tests = [
      { a: { a: [1, 2], b: { c: 3 } }, b: { a: [1, 2], b: { c: 3 } }, expected: true },
      { a: { a: 1 }, b: { a: 2 }, expected: false },
      { a: null, b: null, expected: true },
      { a: null, b: undefined, expected: false },
      { a: [1, [2, 3]], b: [1, [2, 3]], expected: true },
    ]
    const results = tests.map((t, i) => {
      const got = deepEqual(t.a, t.b)
      return `Test ${i + 1}: ${got === t.expected ? 'PASS' : 'FAIL'} (got ${got}, expected ${t.expected})`
    })
    setResult(results.join('\n'))
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Deep Equal</h3>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run Tests</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
