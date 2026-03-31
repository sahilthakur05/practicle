// Day 1 - Q3: Promise.all — Manual Implementation
// Write your own version of Promise.all called promiseAll(promises).

import { useState } from 'react'

export default function Day1_PromiseAll() {
  const [result, setResult] = useState<string>('')

  function promiseAll<T>(promises: Promise<T>[]): Promise<T[]> {
    // Write your solution here
    return new Promise((resolve) => resolve([] as T[]))
  }

  const handleRun = async () => {
    try {
      const output = await promiseAll([
        Promise.resolve(1),
        new Promise<number>(res => setTimeout(() => res(2), 100)),
        Promise.resolve(3),
      ])
      setResult(`Resolved: ${JSON.stringify(output)}`)
    } catch (err) {
      setResult(`Rejected: ${err}`)
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Promise.all — Manual Implementation</h3>
      <p>Implement <code>promiseAll</code> that resolves with results in order, rejects on first rejection.</p>
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
