// Day 1 - Q1: Flatten Nested Object Keys
// Given a nested object, return a flat object where keys are dot-separated paths.
// Input: { user: { name: "Sahil", address: { city: "Delhi", zip: 110001 } }, age: 24 }
// Output: { "user.name": "Sahil", "user.address.city": "Delhi", "user.address.zip": 110001, "age": 24 }

import { useState } from 'react'

export default function Day1_FlattenNestedObject() {
  const [result, setResult] = useState<string>('')

  function flattenObject(obj: Record<string, any>, prefix = ''): Record<string, any> {
    // Write your solution here
    return {}
  }

  const testInput = { user: { name: "Sahil", address: { city: "Delhi", zip: 110001 } }, age: 24 }

  const handleRun = () => {
    const output = flattenObject(testInput)
    setResult(JSON.stringify(output, null, 2))
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Flatten Nested Object Keys</h3>
      <p>Write your <code>flattenObject</code> function above, then click Run to test.</p>
      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>
        {`Input: ${JSON.stringify(testInput, null, 2)}`}
      </pre>
      <button onClick={handleRun} style={{ marginTop: 12, padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
        Run
      </button>
      {result && (
        <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>
          {result}
        </pre>
      )}
    </div>
  )
}
