// Day 6 - Q2: DOM Tree Traversal
// getElementsByClassName and getElementsByTagName from scratch using recursion.

import { useState } from 'react'

export default function Day6_DOMTraversal() {
  const [result, setResult] = useState('')

  function getElementsByClassName(root: Element, className: string): Element[] {
    // TODO: Recursively find elements with className
    return []
  }

  function getElementsByTagName(root: Element, tagName: string): Element[] {
    // TODO: Recursively find elements by tag name
    return []
  }

  const handleRun = () => {
    const byClass = getElementsByClassName(document.body, 'page')
    const byTag = getElementsByTagName(document.body, 'button')
    setResult(`Elements with class "page": ${byClass.length}\nButton elements: ${byTag.length}`)
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>DOM Tree Traversal</h3>
      <p>Implement recursive DOM traversal without querySelectorAll.</p>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
