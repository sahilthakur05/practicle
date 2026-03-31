// Day 7 - Q8: Implement a Virtual DOM Differ (Bonus)
// createElement, diff, patch.

import { useState } from 'react'

interface VNode {
  tag: string
  props: Record<string, any>
  children: (VNode | string)[]
}

export default function Day7_VirtualDOM() {
  const [result, setResult] = useState('')

  // TODO: function createElement(vnode) — creates real DOM from vnode
  // TODO: function diff(oldVNode, newVNode) — returns patches
  // TODO: function patch(dom, patches) — applies patches

  const handleRun = () => {
    const oldTree: VNode = {
      tag: 'div', props: { id: 'app' }, children: [
        { tag: 'h1', props: {}, children: ['Hello'] },
        { tag: 'p', props: { class: 'text' }, children: ['World'] },
      ]
    }

    const newTree: VNode = {
      tag: 'div', props: { id: 'app' }, children: [
        { tag: 'h1', props: {}, children: ['Hello Changed'] },
        { tag: 'p', props: { class: 'text updated' }, children: ['New World'] },
      ]
    }

    // const patches = diff(oldTree, newTree)
    // setResult(JSON.stringify(patches, null, 2))
    setResult('Implement virtual DOM diff above\n\nOld: h1="Hello", p="World"\nNew: h1="Hello Changed", p="New World"')
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Virtual DOM Differ</h3>
      <button onClick={handleRun} style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8, whiteSpace: 'pre-wrap' }}>{result}</pre>}
    </div>
  )
}
