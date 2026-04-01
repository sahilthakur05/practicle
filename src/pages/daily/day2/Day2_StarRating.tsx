// Day 2 - Q8: Build a Star Rating Component (Mini Project)
// Reusable star rating with hover preview.

import { useState } from 'react'

export default function Day2_StarRating() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const maxStars = 5

  // TODO: Implement:
  // - Click star to set rating
  // - Hover to preview (highlight stars up to hovered)
  // - Mouse leave reverts to selected rating
  // - Show "You rated X/5 stars"

  return (
    <div style={{ padding: 20 }}>
      <h3>Star Rating</h3>
      <div style={{ display: 'flex', gap: 4, fontSize: 32, cursor: 'pointer' }}>
        {Array.from({ length: maxStars }, (_, i) => (
          <span
            key={i}
            onClick={() => setRating(i + 1)}
            onMouseEnter={() => setHover(i + 1)}
            onMouseLeave={() => setHover(0)}
            style={{ color: (hover || rating) > i ? '#f59e0b' : '#333' }}
          >
            ★
          </span>
        ))}
      </div>
      {rating > 0 && <p style={{ marginTop: 12, color: '#4ecca3' }}>You rated {rating}/{maxStars} stars</p>}
    </div>
  )
}
