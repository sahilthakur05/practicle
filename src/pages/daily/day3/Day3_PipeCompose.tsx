// Day 3 - Q8: Implement pipe and compose (Bonus)
// pipe: left to right, compose: right to left.

import { useState } from 'react'

export default function Day3_PipeCompose() {
  const [result, setResult] = useState('')

  function pipe(...fns: Function[]) {
    // Write your solution here
    return (x: any) => x
  }

  function compose(...fns: Function[]) {
    // Write your solution here
    return (x: any) => x
  }

  const handleRun = () => {
    const add1 = (x: number) => x + 1
    const double = (x: number) => x * 2
    const square = (x: number) => x * x

    const r1 = pipe(add1, double, square)(2)    // (2+1=3) → (3*2=6) → (6*6=36)
    const r2 = compose(add1, double, square)(2)  // (2*2=4) → (4*2=8) → (8+1=9)
    setResult(`pipe(add1, double, square)(2) = ${r1} (expected 36)\ncompose(add1, double, square)(2) = ${r2} (expected 9)`)
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Pipe & Compose</h3>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
