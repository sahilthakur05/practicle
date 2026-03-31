// Day 6 - Q8: Implement JSON.stringify from scratch (Bonus)
// Handle strings, numbers, booleans, null, arrays, objects. Ignore undefined/functions.

import { useState } from 'react'

export default function Day6_JSONStringify() {
  const [result, setResult] = useState('')

  function myStringify(value: any): string | undefined {
    // Write your solution here
    return undefined
  }

  const handleRun = () => {
    const tests = [
      { input: { a: 1, b: "hello", c: [true, null] }, label: 'object' },
      { input: "hello", label: 'string' },
      { input: 42, label: 'number' },
      { input: [1, 2, 3], label: 'array' },
      { input: null, label: 'null' },
      { input: undefined, label: 'undefined' },
    ]
    const results = tests.map(t => {
      const mine = myStringify(t.input)
      const expected = JSON.stringify(t.input)
      return `${t.label}: ${mine === expected ? 'PASS' : `FAIL (got ${mine}, expected ${expected})`}`
    })
    setResult(results.join('\n'))
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>JSON.stringify from Scratch</h3>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run Tests</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
