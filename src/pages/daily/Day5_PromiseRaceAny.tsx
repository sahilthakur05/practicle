// Day 5 - Q8: Implement Promise.race and Promise.any (Bonus)

import { useState } from 'react'

export default function Day5_PromiseRaceAny() {
  const [result, setResult] = useState('')

  function promiseRace<T>(promises: Promise<T>[]): Promise<T> {
    // Write your solution here — resolves/rejects with first settled
    return promises[0]
  }

  function promiseAny<T>(promises: Promise<T>[]): Promise<T> {
    // Write your solution here — resolves with first fulfilled, rejects with AggregateError if all reject
    return promises[0]
  }

  const handleRun = async () => {
    const fast = new Promise<string>(res => setTimeout(() => res("fast"), 100))
    const slow = new Promise<string>(res => setTimeout(() => res("slow"), 500))
    const fail = new Promise<string>((_, rej) => setTimeout(() => rej("fail"), 200))

    const raceResult = await promiseRace([slow, fast, fail])
    const anyResult = await promiseAny([fail, fast, slow])
    setResult(`Race: ${raceResult} (expected: fast)\nAny: ${anyResult} (expected: fast)`)
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Promise.race & Promise.any</h3>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
