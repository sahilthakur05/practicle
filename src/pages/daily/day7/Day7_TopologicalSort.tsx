// Day 7 - Q4: Topological Sort
// Given tasks with dependencies, return valid execution order.

import { useState } from 'react'

export default function Day7_TopologicalSort() {
  const [result, setResult] = useState('')

  function topSort(graph: Record<string, string[]>): string[] {
    // TODO: Kahn's algorithm or DFS-based
    // Detect circular dependencies
    return []
  }

  const handleRun = () => {
    const graph = { A: [], B: ["A"], C: ["A"], D: ["B", "C"], E: ["D"] }
    try {
      const order = topSort(graph)
      setResult(`Order: ${JSON.stringify(order)}\nExpected: A before B,C before D before E`)
    } catch (e: any) {
      setResult(`Error: ${e.message}`)
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Topological Sort</h3>
      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>
{`A → B → D → E
A → C → D`}
      </pre>
      <button onClick={handleRun} style={{ marginTop: 12, padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
