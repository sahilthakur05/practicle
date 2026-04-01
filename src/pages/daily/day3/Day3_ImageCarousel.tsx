// Day 3 - Q7: Build an Image Carousel (Mini Project)
// Previous/Next, dots, auto-play (pause on hover), wrap around.

import { useState, useEffect } from 'react'

const images = [1, 2, 3, 4, 5].map(n => `https://picsum.photos/600/300?random=${n}`)

export default function Day3_ImageCarousel() {
  const [current, setCurrent] = useState(0)
  const [hovering, setHovering] = useState(false)

  // TODO: Auto-play every 3 seconds (pause on hover)
  // TODO: Wrap around (last → first, first → last)

  return (
    <div style={{ padding: 20 }}>
      <h3>Image Carousel</h3>
      <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}
      >
        <img src={images[current]} alt={`Slide ${current + 1}`} style={{ width: '100%', borderRadius: 8 }} />
        <button onClick={() => setCurrent(prev => (prev - 1 + images.length) % images.length)}
          style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', fontSize: 18 }}>
          ←
        </button>
        <button onClick={() => setCurrent(prev => (prev + 1) % images.length)}
          style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', fontSize: 18 }}>
          →
        </button>
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 12 }}>
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            style={{ width: 12, height: 12, borderRadius: '50%', border: 'none', background: i === current ? '#3b82f6' : '#555', cursor: 'pointer' }} />
        ))}
      </div>
    </div>
  )
}
