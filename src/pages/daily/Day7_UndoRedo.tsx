// Day 7 - Q6: Undo/Redo System (React)
// Text editor with undo/redo, keyboard shortcuts, history stack.

import { useState, useEffect, useRef } from 'react'

export default function Day7_UndoRedo() {
  const [text, setText] = useState('')
  const [history, setHistory] = useState<string[]>([''])
  const [pointer, setPointer] = useState(0)
  const timerRef = useRef<number | null>(null)

  // TODO: Debounce history entries (save after 500ms pause)
  // TODO: Keyboard shortcuts (Ctrl+Z undo, Ctrl+Y redo)
  // TODO: New edits after undo should clear redo history

  const canUndo = pointer > 0
  const canRedo = pointer < history.length - 1

  const handleChange = (value: string) => {
    setText(value)
    // TODO: Debounced save to history
  }

  const undo = () => {
    if (!canUndo) return
    const newPointer = pointer - 1
    setPointer(newPointer)
    setText(history[newPointer])
  }

  const redo = () => {
    if (!canRedo) return
    const newPointer = pointer + 1
    setPointer(newPointer)
    setText(history[newPointer])
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Undo/Redo Editor</h3>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={undo} disabled={!canUndo}
          style={{ padding: '6px 16px', background: canUndo ? '#3b82f6' : '#333', color: '#fff', border: 'none', borderRadius: 6, cursor: canUndo ? 'pointer' : 'default' }}>
          Undo (Ctrl+Z)
        </button>
        <button onClick={redo} disabled={!canRedo}
          style={{ padding: '6px 16px', background: canRedo ? '#3b82f6' : '#333', color: '#fff', border: 'none', borderRadius: 6, cursor: canRedo ? 'pointer' : 'default' }}>
          Redo (Ctrl+Y)
        </button>
      </div>
      <textarea value={text} onChange={e => handleChange(e.target.value)} rows={8}
        style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #333', background: '#1a1a2e', color: '#fff', fontSize: 14, resize: 'vertical' }}
        placeholder="Start typing..." />
      <div style={{ marginTop: 12, color: '#888', fontSize: 14 }}>
        History: {history.length} entries | Position: {pointer + 1}/{history.length}
      </div>
    </div>
  )
}
