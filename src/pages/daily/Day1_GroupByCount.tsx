// Day 1 - Q2: Group By and Count
// Given an array of objects, group them by a given key and return the count per group.

import { useState } from 'react'

export default function Day1_GroupByCount() {
  const [result, setResult] = useState<string>('')

  function groupAndCount(arr: Record<string, any>[], key: string): Record<string, number> {
    // Write your solution here
    return {}
  }

  const orders = [
    { item: "coffee", size: "M" },
    { item: "tea", size: "M" },
    { item: "coffee", size: "L" },
    { item: "coffee", size: "M" },
    { item: "tea", size: "S" },
  ]

  const handleRun = () => {
    const output = groupAndCount(orders, "item")
    setResult(JSON.stringify(output, null, 2))
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Group By and Count</h3>
      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>
        {`Input: groupAndCount(orders, "item")\norders = ${JSON.stringify(orders, null, 2)}`}
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
