// Day 4 - Q5: Todo App with useReducer (React)
// Actions: ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO

import { useReducer, useState } from 'react'

interface Todo { id: number; text: string; completed: boolean }
type Action =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'DELETE_TODO'; id: number }
  | { type: 'EDIT_TODO'; id: number; text: string }

function todoReducer(state: Todo[], action: Action): Todo[] {
  // TODO: Implement reducer with switch statement
  switch (action.type) {
    default: return state
  }
}

export default function Day4_TodoReducer() {
  const [todos, dispatch] = useReducer(todoReducer, [])
  const [input, setInput] = useState('')

  const completedCount = todos.filter(t => t.completed).length

  return (
    <div style={{ padding: 20 }}>
      <h3>Todo App with useReducer</h3>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Add todo..."
          style={{ flex: 1, padding: '6px 10px', borderRadius: 6, border: '1px solid #333', background: '#1a1a2e', color: '#fff' }}
          onKeyDown={e => { if (e.key === 'Enter' && input.trim()) { dispatch({ type: 'ADD_TODO', text: input.trim() }); setInput('') } }} />
        <button onClick={() => { if (input.trim()) { dispatch({ type: 'ADD_TODO', text: input.trim() }); setInput('') } }}
          style={{ padding: '6px 16px', background: '#22c55e', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Add</button>
      </div>
      <p style={{ color: '#888', fontSize: 14 }}>{completedCount}/{todos.length} completed</p>
      {todos.map(todo => (
        <div key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 8, borderBottom: '1px solid #222' }}>
          <input type="checkbox" checked={todo.completed} onChange={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })} />
          <span style={{ flex: 1, textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#666' : '#e0e0e0' }}>{todo.text}</span>
          <button onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}>Delete</button>
        </div>
      ))}
    </div>
  )
}
