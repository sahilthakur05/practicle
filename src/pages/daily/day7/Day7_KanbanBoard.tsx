// Day 7 - Q7: Build a Kanban Board (Mini Project)
// 3 columns: Todo, In Progress, Done. Move cards, edit, delete, persist.

import { useState, useEffect } from 'react'

interface Card { id: number; text: string }
interface Board { todo: Card[]; inProgress: Card[]; done: Card[] }

const columns = ['todo', 'inProgress', 'done'] as const
const columnLabels: Record<string, string> = { todo: 'Todo', inProgress: 'In Progress', done: 'Done' }
const columnColors: Record<string, string> = { todo: '#3b82f6', inProgress: '#f59e0b', done: '#22c55e' }

export default function Day7_KanbanBoard() {
  const [board, setBoard] = useState<Board>(() => {
    try {
      const saved = localStorage.getItem('kanban-board')
      return saved ? JSON.parse(saved) : { todo: [], inProgress: [], done: [] }
    } catch { return { todo: [], inProgress: [], done: [] } }
  })
  const [input, setInput] = useState('')

  // TODO: Persist to localStorage on change
  // TODO: Add card to Todo
  // TODO: Move card between columns (→ and ←)
  // TODO: Edit card text inline
  // TODO: Delete with confirmation

  const addCard = () => {
    if (!input.trim()) return
    setBoard(prev => ({
      ...prev,
      todo: [...prev.todo, { id: Date.now(), text: input.trim() }]
    }))
    setInput('')
  }

  const moveCard = (from: keyof Board, to: keyof Board, cardId: number) => {
    setBoard(prev => {
      const card = prev[from].find(c => c.id === cardId)
      if (!card) return prev
      return {
        ...prev,
        [from]: prev[from].filter(c => c.id !== cardId),
        [to]: [...prev[to], card],
      }
    })
  }

  const deleteCard = (col: keyof Board, cardId: number) => {
    if (!confirm('Delete this card?')) return
    setBoard(prev => ({ ...prev, [col]: prev[col].filter(c => c.id !== cardId) }))
  }

  useEffect(() => {
    localStorage.setItem('kanban-board', JSON.stringify(board))
  }, [board])

  const colIndex = (col: string) => columns.indexOf(col as any)

  return (
    <div style={{ padding: 20 }}>
      <h3>Kanban Board</h3>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="New card..."
          onKeyDown={e => e.key === 'Enter' && addCard()}
          style={{ flex: 1, padding: '6px 10px', borderRadius: 6, border: '1px solid #333', background: '#1a1a2e', color: '#fff' }} />
        <button onClick={addCard} style={{ padding: '6px 16px', background: '#22c55e', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Add</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
        {columns.map(col => (
          <div key={col} style={{ background: '#1a1a2e', borderRadius: 8, padding: 12 }}>
            <h4 style={{ color: columnColors[col], marginBottom: 8 }}>
              {columnLabels[col]} ({board[col].length})
            </h4>
            {board[col].map(card => (
              <div key={card.id} style={{ background: '#0f0f23', padding: 10, borderRadius: 6, marginBottom: 6, borderLeft: `3px solid ${columnColors[col]}` }}>
                <p style={{ color: '#e0e0e0', margin: 0, marginBottom: 6 }}>{card.text}</p>
                <div style={{ display: 'flex', gap: 4 }}>
                  {colIndex(col) > 0 && (
                    <button onClick={() => moveCard(col, columns[colIndex(col) - 1], card.id)}
                      style={{ fontSize: 12, padding: '2px 6px', background: '#333', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}>←</button>
                  )}
                  {colIndex(col) < 2 && (
                    <button onClick={() => moveCard(col, columns[colIndex(col) + 1], card.id)}
                      style={{ fontSize: 12, padding: '2px 6px', background: '#333', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}>→</button>
                  )}
                  <button onClick={() => deleteCard(col, card.id)}
                    style={{ fontSize: 12, padding: '2px 6px', background: '#333', color: '#ef4444', border: 'none', borderRadius: 4, cursor: 'pointer', marginLeft: 'auto' }}>x</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
