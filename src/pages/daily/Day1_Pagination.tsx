// Day 1 - Q8: Build a Pagination Component (Mini Project)
// Fetch 100 products from https://dummyjson.com/products?limit=100 and display with pagination.

import { useState, useEffect } from 'react'

export default function Day1_Pagination() {
  const [products, setProducts] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // TODO: Fetch products on mount
  // TODO: Calculate pagination (totalPages, currentItems)
  // TODO: Previous/Next buttons (disabled at boundaries)
  // TODO: Page number buttons with active highlight

  return (
    <div style={{ padding: 20 }}>
      <h3>Pagination Component</h3>
      <p>Fetch 100 products and paginate them (10 per page).</p>

      {/* Product list */}
      <div style={{ marginTop: 12 }}>
        <p style={{ color: '#888' }}>Products will appear here...</p>
      </div>

      {/* Pagination controls */}
      <div style={{ display: 'flex', gap: 4, marginTop: 16, justifyContent: 'center' }}>
        <button disabled={currentPage === 1}>Previous</button>
        {/* TODO: Page number buttons */}
        <button>Next</button>
      </div>
    </div>
  )
}
