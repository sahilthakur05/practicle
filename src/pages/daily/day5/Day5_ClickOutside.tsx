// Day 5 - Q5: Click Outside Hook (React)
// useClickOutside(ref, callback) — build a dropdown that closes on outside click.

import { useState, useRef, useEffect } from 'react'

function useClickOutside(ref: React.RefObject<HTMLElement | null>, callback: () => void) {
  // TODO: Add click event listener in useEffect
  // Check if click target is outside ref.current
  // Cleanup on unmount
}

export default function Day5_ClickOutside() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useClickOutside(dropdownRef, () => setOpen(false))

  return (
    <div style={{ padding: 20 }}>
      <h3>Click Outside Hook</h3>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button onClick={() => setOpen(!open)}
          style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          {open ? 'Close' : 'Open'} Dropdown
        </button>
        {open && (
          <div ref={dropdownRef} style={{ position: 'absolute', top: '100%', left: 0, marginTop: 4, background: '#1a1a2e', border: '1px solid #333', borderRadius: 8, padding: 8, minWidth: 200, zIndex: 10 }}>
            <div style={{ padding: 8, cursor: 'pointer', color: '#e0e0e0' }}>Option 1</div>
            <div style={{ padding: 8, cursor: 'pointer', color: '#e0e0e0' }}>Option 2</div>
            <div style={{ padding: 8, cursor: 'pointer', color: '#e0e0e0' }}>Option 3</div>
          </div>
        )}
      </div>
    </div>
  )
}
