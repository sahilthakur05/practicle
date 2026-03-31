// Day 2 - Q7: Tabs Component with Lazy Content (React)
// Build tabs that unmount inactive content (not just CSS hide).

import { useState, useEffect } from 'react'

function ProfileTab() {
  useEffect(() => { console.log('Profile mounted'); return () => console.log('Profile unmounted') }, [])
  return <div><h4>Profile</h4><p>User profile content here...</p></div>
}

function SettingsTab() {
  useEffect(() => { console.log('Settings mounted'); return () => console.log('Settings unmounted') }, [])
  return <div><h4>Settings</h4><p>Settings content here...</p></div>
}

function NotificationsTab() {
  useEffect(() => { console.log('Notifications mounted'); return () => console.log('Notifications unmounted') }, [])
  return <div><h4>Notifications</h4><p>Notifications content here...</p></div>
}

const tabs = ['Profile', 'Settings', 'Notifications'] as const

export default function Day2_TabsComponent() {
  const [active, setActive] = useState<string>('Profile')

  // TODO: Render ONLY the active tab component (unmount others)

  return (
    <div style={{ padding: 20 }}>
      <h3>Tabs with Lazy Content</h3>
      <div style={{ display: 'flex', gap: 0, marginBottom: 16 }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              padding: '10px 24px', border: 'none', cursor: 'pointer',
              background: active === tab ? '#3b82f6' : '#1a1a2e',
              color: active === tab ? '#fff' : '#888',
              borderBottom: active === tab ? '2px solid #3b82f6' : '2px solid #333',
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div style={{ padding: 16, background: '#1a1a2e', borderRadius: 8, color: '#e0e0e0' }}>
        {/* TODO: Conditionally render the active tab component */}
        <p>Render active tab content here. Check console for mount/unmount logs.</p>
      </div>
    </div>
  )
}
