// Day 7 - Q5: Error Boundary Component (React)
// Class component that catches render errors, shows fallback, "Try Again" button.

import React, { useState } from 'react'

// TODO: class ErrorBoundary extends React.Component
// - static getDerivedStateFromError(error) → { hasError: true, error }
// - componentDidCatch(error, info) → log error
// - render: show fallback UI or children
// - "Try Again" button resets state

function BuggyComponent() {
  const [shouldError, setShouldError] = useState(false)
  if (shouldError) throw new Error('Something went wrong!')
  return (
    <div>
      <p>This component works fine... until you click the button.</p>
      <button onClick={() => setShouldError(true)}
        style={{ padding: '8px 16px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
        Trigger Error
      </button>
    </div>
  )
}

export default function Day7_ErrorBoundary() {
  return (
    <div style={{ padding: 20 }}>
      <h3>Error Boundary</h3>
      <p style={{ color: '#888' }}>TODO: Wrap BuggyComponent in an ErrorBoundary</p>
      {/* <ErrorBoundary fallback={<p>Custom fallback UI</p>}> */}
        <BuggyComponent />
      {/* </ErrorBoundary> */}
    </div>
  )
}
