// Day 3 - Q6: Optimized List with React.memo (React)
// 1000 items, click "like" on one — only that one should re-render.

import { useState, useCallback, memo } from 'react'

// TODO: Wrap in React.memo
function ListItem({ item, onLike }: { item: { id: number; name: string; liked: boolean }; onLike: (id: number) => void }) {
  console.log(`render: item ${item.id}`)
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 8px', borderBottom: '1px solid #222' }}>
      <span>{item.name}</span>
      <button onClick={() => onLike(item.id)} style={{ background: item.liked ? '#ef4444' : '#333', color: '#fff', border: 'none', borderRadius: 4, padding: '2px 8px', cursor: 'pointer' }}>
        {item.liked ? 'Unlike' : 'Like'}
      </button>
    </div>
  )
}

export default function Day3_OptimizedList() {
  const [items, setItems] = useState(() =>
    Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}`, liked: false }))
  )

  // TODO: Use useCallback so the handler reference is stable
  const handleLike = (id: number) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, liked: !item.liked } : item))
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Optimized List (check console for re-renders)</h3>
      <div style={{ maxHeight: 400, overflow: 'auto', border: '1px solid #333', borderRadius: 8 }}>
        {items.map(item => (
          <ListItem key={item.id} item={item} onLike={handleLike} />
        ))}
      </div>
    </div>
  )
}
