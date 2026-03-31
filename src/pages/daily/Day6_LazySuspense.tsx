// Day 6 - Q5: Lazy Loaded Routes with Suspense (React)
// 3 routes with React.lazy, Suspense boundary, nav bar.

import { useState, Suspense, lazy } from 'react'

// TODO: Use React.lazy for each page component
// const LazyHome = lazy(() => import('./SomePage'))

function MiniHome() { return <div><h4>Home Page</h4><p>Welcome!</p></div> }
function MiniAbout() { return <div><h4>About Page</h4><p>About us content.</p></div> }
function MiniContact() { return <div><h4>Contact Page</h4><p>Contact form here.</p></div> }

const pages: Record<string, React.FC> = { Home: MiniHome, About: MiniAbout, Contact: MiniContact }

export default function Day6_LazySuspense() {
  const [page, setPage] = useState('Home')
  const Page = pages[page]

  return (
    <div style={{ padding: 20 }}>
      <h3>Lazy Loaded Routes</h3>
      <p style={{ color: '#888', fontSize: 14 }}>TODO: Replace inline components with React.lazy imports</p>
      <nav style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {Object.keys(pages).map(p => (
          <button key={p} onClick={() => setPage(p)}
            style={{ padding: '6px 16px', background: page === p ? '#3b82f6' : '#1a1a2e', color: page === p ? '#fff' : '#888', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
            {p}
          </button>
        ))}
      </nav>
      {/* TODO: Wrap in <Suspense fallback={<Loading />}> */}
      <div style={{ padding: 16, background: '#1a1a2e', borderRadius: 8, color: '#e0e0e0' }}>
        <Page />
      </div>
    </div>
  )
}
