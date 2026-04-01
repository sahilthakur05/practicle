// Day 4 - Q7: Build a Drag & Drop Sortable List (Mini Project)
// Native HTML5 drag events. No external libraries.

import { useState } from 'react'

const initialItems = ['Learn React', 'Build Projects', 'Practice DSA', 'Read Docs', 'Write Tests']

export default function Day4_DragDropList() {
  const [items, setItems] = useState(initialItems)
  const [dragIndex, setDragIndex] = useState<number | null>(null)
  const [overIndex, setOverIndex] = useState<number | null>(null)

  // TODO: Implement drag handlers:
  // onDragStart: set dragIndex
  // onDragOver: prevent default, set overIndex
  // onDrop: reorder items
  // onDragEnd: reset state

  return (
    <div style={{ padding: 20 }}>
      <h3>Drag & Drop Sortable List</h3>
      <div style={{ maxWidth: 400 }}>
        {items.map((item, i) => (
          <div
            key={item}
            draggable
            onDragStart={() => setDragIndex(i)}
            onDragOver={e => { e.preventDefault(); setOverIndex(i) }}
            onDrop={() => {
              if (dragIndex === null) return
              const newItems = [...items]
              const [moved] = newItems.splice(dragIndex, 1)
              newItems.splice(i, 0, moved)
              setItems(newItems)
              setDragIndex(null)
              setOverIndex(null)
            }}
            onDragEnd={() => { setDragIndex(null); setOverIndex(null) }}
            style={{
              padding: '10px 14px', margin: 4, borderRadius: 6, cursor: 'grab',
              background: i === overIndex ? '#3b82f620' : '#1a1a2e',
              border: i === overIndex ? '2px dashed #3b82f6' : '1px solid #333',
              color: '#e0e0e0', opacity: i === dragIndex ? 0.5 : 1,
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <pre style={{ marginTop: 16, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>
        {JSON.stringify(items, null, 2)}
      </pre>
    </div>
  )
}
