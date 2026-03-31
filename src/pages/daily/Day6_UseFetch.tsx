// Day 6 - Q6: Data Fetching with useFetch Hook (React)
// useFetch(url) → { data, loading, error, refetch }

import { useState, useEffect, useCallback } from 'react'

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // TODO: Implement fetch in useEffect
  // - Use AbortController to cancel on url change
  // - Handle errors gracefully
  // - refetch function to re-trigger

  const refetch = useCallback(() => {
    // TODO: re-trigger the fetch
  }, [url])

  return { data, loading, error, refetch }
}

export default function Day6_UseFetch() {
  const { data, loading, error, refetch } = useFetch<any[]>('https://jsonplaceholder.typicode.com/users')

  return (
    <div style={{ padding: 20 }}>
      <h3>useFetch Hook</h3>
      <button onClick={refetch} style={{ padding: '8px 16px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', marginBottom: 12 }}>
        Refetch
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: '#ef4444' }}>Error: {error}</p>}
      {data && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {(data as any[]).map((user: any) => (
            <li key={user.id} style={{ padding: 8, borderBottom: '1px solid #222', color: '#e0e0e0' }}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
