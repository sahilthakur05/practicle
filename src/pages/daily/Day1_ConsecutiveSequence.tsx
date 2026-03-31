// Day 1 - Q4: Consecutive Sequence Finder
// Given an unsorted array of numbers, find the length of the longest consecutive sequence.
// Must be O(n) using a Set.

import { useState } from 'react'

export default function Day1_ConsecutiveSequence() {
  const [result, setResult] = useState<string>('')

  function longestConsecutive(nums: number[]): number {
    // Write your solution here
    return 0
  }

  const testInput = [100, 4, 200, 1, 3, 2]

  const handleRun = () => {
    const output = longestConsecutive(testInput)
    setResult(`Longest consecutive sequence length: ${output}`)
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Consecutive Sequence Finder</h3>
      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>
        {`Input: [100, 4, 200, 1, 3, 2]\nExpected: 4 (sequence: 1, 2, 3, 4)`}
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
