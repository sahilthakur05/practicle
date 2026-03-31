// Day 5 - Q7: Build a Toast/Notification System (Mini Project)
// Use React Portals. Support success/error/warning/info types.

import { useState } from 'react'

interface Toast { id: number; message: string; type: 'success' | 'error' | 'warning' | 'info' }

const typeColors = { success: '#22c55e', error: '#ef4444', warning: '#f59e0b', info: '#3b82f6' }

export default function Day5_ToastSystem() {
  const [toasts, setToasts] = useState<Toast[]>([])

  // TODO: Use createPortal to render toasts outside main DOM
  // TODO: Auto-dismiss after 3 seconds with progress bar
  // TODO: Animate entry/exit

  const addToast = (type: Toast['type']) => {
    const id = Date.now()
    setToasts(prev => [{ id, message: `This is a ${type} toast!`, type }, ...prev])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000)
  }

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Toast Notification System</h3>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {(['success', 'error', 'warning', 'info'] as const).map(type => (
          <button key={type} onClick={() => addToast(type)}
            style={{ padding: '8px 16px', background: typeColors[type], color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
            {type}
          </button>
        ))}
      </div>

      {/* TODO: Move this to a Portal */}
      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {toasts.map(toast => (
          <div key={toast.id} style={{ padding: '12px 16px', background: typeColors[toast.type], color: '#fff', borderRadius: 8, minWidth: 250, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{toast.message}</span>
            <button onClick={() => removeToast(toast.id)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 18 }}>x</button>
          </div>
        ))}
      </div>
    </div>
  )
}
