// Day 6 - Q3: JSON Path Resolver
// resolve(obj, path) and set(obj, path, value) with dot-notation.

import { useState } from 'react'

export default function Day6_JSONPath() {
  const [result, setResult] = useState('')

  function resolve(obj: any, path: string): any {
    // Write your solution here
    return undefined
  }

  function set(obj: any, path: string, value: any): void {
    // Write your solution here — create intermediate objects if needed
  }

  const handleRun = () => {
    const data = { user: { address: { city: "Delhi" } } }
    const r1 = resolve(data, "user.address.city")
    set(data, "user.address.zip", 110001)
    const r2 = resolve(data, "user.address.zip")
    const r3 = resolve(data, "user.phone.number")
    setResult(`resolve("user.address.city") = ${r1}\nresolve("user.address.zip") = ${r2} (after set)\nresolve("user.phone.number") = ${r3} (missing path)`)
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>JSON Path Resolver</h3>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
