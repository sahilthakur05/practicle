// Day 2 - Q6: Custom Hook: useWindowSize (React)
// Create useWindowSize() → { width, height }, show Mobile/Tablet/Desktop.

import { useState, useEffect } from 'react'

function useWindowSize() {
  // TODO: Implement this hook
  // - Return { width, height }
  // - Listen to resize events
  // - Cleanup listener on unmount
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })
  return size
}

export default function Day2_UseWindowSize() {
  const { width, height } = useWindowSize()

  const device = width < 768 ? 'Mobile' : width < 1024 ? 'Tablet' : 'Desktop'
  const color = width < 768 ? '#ef4444' : width < 1024 ? '#f59e0b' : '#22c55e'

  return (
    <div style={{ padding: 20 }}>
      <h3>useWindowSize Hook</h3>
      <div style={{ fontSize: 32, fontWeight: 'bold', color, textAlign: 'center', margin: 20 }}>
        {device}
      </div>
      <p style={{ textAlign: 'center', color: '#888' }}>{width} x {height}</p>
      <p style={{ textAlign: 'center', color: '#666', fontSize: 14 }}>Resize the window to see it change</p>
    </div>
  )
}
