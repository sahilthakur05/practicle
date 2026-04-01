// Day 7 - Q3: Rate Limiter
// Sliding window algorithm. rateLimiter(maxRequests, windowMs).

import { useState } from 'react'

export default function Day7_RateLimiter() {
  const [logs, setLogs] = useState<string[]>([])

  function rateLimiter(maxRequests: number, windowMs: number) {
    // TODO: Sliding window implementation
    // Return a function that returns true (allowed) or false (rate limited)
    return () => true
  }

  const limiter = rateLimiter(3, 2000)

  const handleClick = () => {
    const allowed = limiter()
    const msg = `${new Date().toLocaleTimeString()}: ${allowed ? 'ALLOWED' : 'RATE LIMITED'}`
    setLogs(prev => [msg, ...prev].slice(0, 20))
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Rate Limiter</h3>
      <p style={{ color: '#888' }}>3 requests per 2 seconds. Click rapidly to test.</p>
      <button onClick={handleClick} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Make Request</button>
      <div style={{ marginTop: 12 }}>
        {logs.map((l, i) => <div key={i} style={{ color: l.includes('LIMITED') ? '#ef4444' : '#4ecca3', fontSize: 14 }}>{l}</div>)}
      </div>
    </div>
  )
}
