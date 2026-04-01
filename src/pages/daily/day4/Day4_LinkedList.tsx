// Day 4 - Q1: Implement a Linked List
// LinkedList with append, prepend, delete, find, toArray.

import { useState } from 'react'

export default function Day4_LinkedList() {
  const [result, setResult] = useState('')

  // TODO: Create Node class and LinkedList class
  // class Node { constructor(value) { this.value = value; this.next = null } }
  // class LinkedList { append, prepend, delete, find, toArray }

  const handleRun = () => {
    // const list = new LinkedList()
    // list.append(1); list.append(2); list.append(3);
    // list.prepend(0);
    // list.delete(2);
    // setResult(JSON.stringify(list.toArray()))
    setResult('Implement LinkedList class above')
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Linked List Implementation</h3>
      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>Expected: [0, 1, 3]</pre>
      <button onClick={handleRun} style={{ marginTop: 12, padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}
    </div>
  )
}
