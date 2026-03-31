// Day 1 - Q6: Race Condition in useEffect (React)
// Build a Search component that handles race conditions properly.
// Fetch from: https://dummyjson.com/products/search?q={query}

import { useState } from 'react'

export default function Day1_RaceCondition() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  // TODO: Add useEffect with:
  // 1. 300ms debounce
  // 2. Race condition handling (cleanup function or AbortController)
  // 3. Loading state

  return (
    <div style={{ padding: 20 }}>
      <h3>Race Condition in useEffect</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        style={{ padding: '8px 12px', fontSize: 16, width: 300, borderRadius: 6, border: '1px solid #333', background: '#1a1a2e', color: '#fff' }}
      />
      {loading && <p>Loading...</p>}
      <ul style={{ marginTop: 12 }}>
        {results.map((r: any) => (
          <li key={r.id} style={{ padding: 4 }}>{r.title}</li>
        ))}
      </ul>
    </div>
  )
}
