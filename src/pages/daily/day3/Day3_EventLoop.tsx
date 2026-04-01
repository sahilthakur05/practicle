// Day 3 - Q3: Event Loop Output
// Predict the output order and explain microtask vs macrotask.

import { useState } from 'react'

export default function Day3_EventLoop() {
  const [logs, setLogs] = useState<string[]>([])

  const handleRun = () => {
    setLogs([])
    const output: string[] = []
    const log = (msg: string) => output.push(msg)

    log("1")
    setTimeout(() => { log("2"); setLogs([...output]) }, 0)
    Promise.resolve().then(() => log("3"))
    Promise.resolve().then(() => setTimeout(() => { log("4"); setLogs([...output]) }, 0))
    Promise.resolve().then(() => log("5"))
    setTimeout(() => { log("6"); setLogs([...output]) }, 0)
    log("7")

    // Sync logs update immediately
    setTimeout(() => setLogs([...output]), 100)
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Event Loop Output</h3>
      <p>Predict the order, then click Run to verify.</p>
      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>
{`console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
Promise.resolve().then(() => setTimeout(() => console.log("4"), 0));
Promise.resolve().then(() => console.log("5"));
setTimeout(() => console.log("6"), 0);
console.log("7");`}
      </pre>
      <button onClick={handleRun} style={{ marginTop: 12, padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {logs.length > 0 && (
        <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>
          {logs.map((l, i) => `${i + 1}. ${l}`).join('\n')}
        </pre>
      )}
    </div>
  )
}
