// Day 3 - Q4: Curry Function
// curry(fn) — call one argument at a time or partial application.

import { useState } from 'react'

export default function Day3_Curry() {
  const [result, setResult] = useState('')

  function curry(fn: (...args: any[]) => any): any {
    // Write your solution here
    return fn
  }

  const handleRun = () => {
    const add = curry((a: number, b: number, c: number) => a + b + c)
    const results = [
      `add(1)(2)(3) = ${add(1)(2)(3)}`,
      `add(1, 2)(3) = ${add(1, 2)(3)}`,
      `add(1)(2, 3) = ${add(1)(2, 3)}`,
      `add(1, 2, 3) = ${add(1, 2, 3)}`,
    ]
    setResult(results.join('\n'))
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Curry Function</h3>
      <p>All forms should return 6.</p>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
