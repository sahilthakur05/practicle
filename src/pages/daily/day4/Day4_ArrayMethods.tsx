// Day 4 - Q8: Implement Array.prototype methods from scratch (Bonus)
// myMap, myFilter, myReduce (without built-in versions)

import { useState } from 'react'

export default function Day4_ArrayMethods() {
  const [result, setResult] = useState('')

  const handleRun = () => {
    // TODO: Add to Array.prototype:
    // Array.prototype.myMap = function(cb) { ... }
    // Array.prototype.myFilter = function(cb) { ... }
    // Array.prototype.myReduce = function(cb, init) { ... }

    // Then test:
    // const mapResult = [1,2,3].myMap(x => x * 2)
    // const filterResult = [1,2,3,4].myFilter(x => x % 2 === 0)
    // const reduceResult = [1,2,3,4].myReduce((acc, x) => acc + x, 0)

    setResult('Implement Array.prototype methods above')
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Array.prototype Methods from Scratch</h3>
      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>
{`Expected:
myMap: [1,2,3].myMap(x => x * 2) → [2, 4, 6]
myFilter: [1,2,3,4].myFilter(x => x % 2 === 0) → [2, 4]
myReduce: [1,2,3,4].myReduce((acc, x) => acc + x, 0) → 10`}
      </pre>
      <button onClick={handleRun} style={{ marginTop: 12, padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
