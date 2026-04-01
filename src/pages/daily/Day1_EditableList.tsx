// Day 1 Extra - Q14: Editable Todo List (Add + Delete + Edit)
// Practice: Combines Q7 (todo) + Q8 (edit mode) — both were weak!

import { useState } from 'react'

export default function Day1_EditableList() {
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)

  const hints = [
    'Store todos as objects: { id: number, text: string }[]. Use an editingId state to track which todo is being edited, and editText for the edit input value.',
    'To add: check if input is empty first (if (!input.trim()) return), then setTodos([...todos, { id: Date.now(), text: input.trim() }]). Using Date.now() gives unique IDs.',
    'To edit: when clicking edit, set editingId to that todo\'s id and editText to its text. Show input instead of text for that item only: {editingId === todo.id ? <input.../> : <span>{todo.text}</span>}',
  ]

  // Write your solution here
  // const [input, setInput] = useState('')
  // const [todos, setTodos] = useState<{id: number, text: string}[]>([])
  // const [editingId, setEditingId] = useState<number | null>(null)
  // const [editText, setEditText] = useState('')

  return (
    <div style={{ padding: 20 }}>
      <h3>Editable Todo List</h3>
      <p style={{ color: '#f59e0b', fontSize: 13, margin: '0 0 12px 0', padding: '6px 12px', background: '#f59e0b15', borderRadius: 6, border: '1px solid #f59e0b30' }}>
        WEAK SPOT: Q7 had no delete + wrong setState. Q8 had broken edit mode. This combines both — add, delete, AND inline edit.
      </p>

      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setShowExplanation(!showExplanation)} style={{ padding: '6px 16px', background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          {showExplanation ? 'Hide Explanation' : 'What does this mean? 🤔'}
        </button>
        {showExplanation && (
          <div style={{ marginTop: 8, background: '#1a1a2e', padding: 16, borderRadius: 8, border: '1px solid #8b5cf6', color: '#e0e0e0', lineHeight: 1.8 }}>
            <p><strong>Build a todo list with 3 operations:</strong></p>
            <ul>
              <li><strong>Add:</strong> Type + click Add → new todo appears (validate: no empty todos!)</li>
              <li><strong>Delete:</strong> Click delete button → todo removed using <code>.filter()</code></li>
              <li><strong>Edit:</strong> Click edit → text becomes input field → type new text → click save → text updates</li>
            </ul>
            <p><strong>Key patterns:</strong></p>
            <ul>
              <li><code>setTodos([...todos, newItem])</code> — add (spread + new item)</li>
              <li><code>setTodos(todos.filter(t =&gt; t.id !== id))</code> — delete (filter out by id)</li>
              <li><code>setTodos(todos.map(t =&gt; t.id === id ? {'{ ...t, text: newText }'} : t))</code> — edit (map + replace one)</li>
            </ul>
            <p><strong>Remember:</strong> <code>.filter()</code> = remove, <code>.map()</code> = update, <code>[...arr, item]</code> = add</p>
          </div>
        )}
      </div>

      <div style={{ marginBottom: 12 }}>
        <button onClick={() => { setShowHints(!showHints); if (!showHints && hintLevel === 0) setHintLevel(1) }} style={{ padding: '6px 16px', background: '#f59e0b', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          {showHints ? 'Hide Hints' : 'Show Hints'}
        </button>
        {showHints && (
          <div style={{ marginTop: 8, background: '#1a1a2e', padding: 12, borderRadius: 8, border: '1px solid #f59e0b' }}>
            {hints.slice(0, hintLevel).map((hint, i) => (
              <p key={i} style={{ color: '#fbbf24', margin: '6px 0' }}><strong>Hint {i + 1}:</strong> {hint}</p>
            ))}
            {hintLevel < hints.length && (
              <button onClick={() => setHintLevel(hintLevel + 1)} style={{ marginTop: 4, padding: '4px 12px', background: '#92400e', color: '#fbbf24', border: 'none', borderRadius: 4, cursor: 'pointer' }}>
                Next Hint ({hintLevel}/{hints.length})
              </button>
            )}
          </div>
        )}
      </div>

      {/* YOUR CODE HERE: Add input, buttons, and editable list */}
      <div style={{ marginTop: 16 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <input type="text" placeholder="Type a task..." style={{ padding: '8px 12px', flex: 1, borderRadius: 6, border: '1px solid #333', background: '#1a1a2e', color: '#fff', fontSize: 16 }} />
          <button style={{ padding: '8px 20px', background: '#22c55e', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Add</button>
        </div>
        <p style={{ color: '#888', marginTop: 12 }}>Uncomment the useState lines and build the add/delete/edit functionality!</p>
      </div>
    </div>
  )
}
