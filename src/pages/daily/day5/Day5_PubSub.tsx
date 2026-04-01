// Day 5 - Q4: Pub/Sub Pattern
// subscribe, publish, unsubscribe with wildcard support.

import { useState } from 'react'

export default function Day5_PubSub() {
  const [logs, setLogs] = useState<string[]>([])

  // TODO: class PubSub { subscribe(topic, cb), publish(topic, data), unsubscribe(topic, cb) }
  // Support wildcard: "user.*" matches "user.login", "user.logout"

  const handleRun = () => {
    setLogs(['Implement PubSub class above'])
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Pub/Sub Pattern</h3>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      <div style={{ marginTop: 12 }}>{logs.map((l, i) => <div key={i} style={{ color: '#4ecca3', fontSize: 14 }}>{l}</div>)}</div>
    </div>
  )
}
