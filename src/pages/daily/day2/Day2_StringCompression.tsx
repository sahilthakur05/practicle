// Day 2 - Q1: String Compression
// Compress a string by counting consecutive repeated characters.
// Input: "aaabbcddddd" → Output: "a3b2c1d5"

import { useState } from 'react'

export default function Day2_StringCompression() {
  const [input, setInput] = useState('aaabbcddddd')
  const [result, setResult] = useState('')

  function compress(str: string): string {
    // Write your solution here
    return str
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>String Compression</h3>
      <input value={input} onChange={e => setInput(e.target.value)} style={{ padding: '6px 10px', width: 300, borderRadius: 6, border: '1px solid #333', background: '#1a1a2e', color: '#fff' }} />
      <button onClick={() => setResult(compress(input))} style={{ marginLeft: 8, padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
