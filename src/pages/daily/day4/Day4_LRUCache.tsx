// Day 4 - Q4: LRU Cache
// Fixed capacity cache. Evict least recently used on overflow.

import { useState } from 'react'

export default function Day4_LRUCache() {
  const [result, setResult] = useState('')

  // TODO: class LRUCache { constructor(capacity), get(key), put(key, value) }
  // Use a Map for O(1) operations

  const handleRun = () => {
    // const cache = new LRUCache(3)
    // cache.put("a", 1); cache.put("b", 2); cache.put("c", 3);
    // const r1 = cache.get("a") // 1
    // cache.put("d", 4) // evicts "b"
    // const r2 = cache.get("b") // -1
    // setResult(`get("a") = ${r1} (expected 1)\nget("b") = ${r2} (expected -1)`)
    setResult('Implement LRUCache class above')
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>LRU Cache</h3>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
