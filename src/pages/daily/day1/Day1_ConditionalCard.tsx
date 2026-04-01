// Day 1 Extra - Q13: Conditional Card (View/Edit/Delete modes)
// Practice: Ternary rendering — in Q8 your edit mode showed BELOW view instead of replacing!

import { useState } from 'react'

export default function Day1_ConditionalCard() {
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)

  const hints = [
    'Use useState for mode: const [mode, setMode] = useState<"view"|"edit"|"delete">("view"). Also useState for productName and productPrice.',
    'Use nested ternary: {mode === "edit" ? (<EditUI/>) : mode === "delete" ? (<DeleteConfirm/>) : (<ViewUI/>)}',
    'Edit mode: two inputs + Save + Cancel. Delete mode: "Are you sure?" + Yes + No. View mode: text + Edit button + Delete button.',
  ]

  // Write your solution here
  // const [mode, setMode] = useState<'view' | 'edit' | 'delete'>('view')
  // const [productName, setProductName] = useState('iPhone 15')
  // const [productPrice, setProductPrice] = useState('79999')

  return (
    <div style={{ padding: 20 }}>
      <h3>Conditional Card (View / Edit / Delete)</h3>
      <p style={{ color: '#f59e0b', fontSize: 13, margin: '0 0 12px 0', padding: '6px 12px', background: '#f59e0b15', borderRadius: 6, border: '1px solid #f59e0b30' }}>
        WEAK SPOT: In Q8 Profile Card, your edit mode showed BELOW the view instead of REPLACING it. This drills proper conditional rendering with ternary.
      </p>

      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setShowExplanation(!showExplanation)} style={{ padding: '6px 16px', background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          {showExplanation ? 'Hide Explanation' : 'What does this mean? 🤔'}
        </button>
        {showExplanation && (
          <div style={{ marginTop: 8, background: '#1a1a2e', padding: 16, borderRadius: 8, border: '1px solid #8b5cf6', color: '#e0e0e0', lineHeight: 1.8 }}>
            <p><strong>Build a product card with 3 modes:</strong></p>
            <ul>
              <li><strong>View mode:</strong> Shows name + price as text, Edit button, Delete button</li>
              <li><strong>Edit mode:</strong> Shows input fields, Save button, Cancel button — <strong>NO view text!</strong></li>
              <li><strong>Delete mode:</strong> Shows "Are you sure?" message, Yes button, No button</li>
            </ul>
            <p><strong>The KEY rule:</strong> Only ONE mode shows at a time. Use ternary:</p>
            <pre style={{ background: '#0f172a', padding: 8, borderRadius: 4, fontSize: 13 }}>
{`{mode === "edit" ? (
  <div>...edit inputs here...</div>
) : mode === "delete" ? (
  <div>Are you sure?...</div>
) : (
  <div>...view mode here...</div>
)}`}
            </pre>
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

      {/* YOUR CODE HERE: Build the 3-mode product card */}
      <div style={{ maxWidth: 400, margin: '16px 0', padding: 24, background: '#1a1a2e', borderRadius: 12, border: '1px solid #333' }}>
        <p style={{ color: '#888' }}>Build your conditional card here. Start by uncommenting the useState lines above.</p>
        <p style={{ color: '#666', fontSize: 13 }}>Product: iPhone 15, Price: ₹79,999</p>
      </div>
    </div>
  )
}
