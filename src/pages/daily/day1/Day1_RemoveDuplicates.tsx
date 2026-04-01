// Day 1 - Q4: Remove Duplicates from Array
// Write a function that removes duplicate values from an array.

import { useState } from 'react'

export default function Day1_RemoveDuplicates() {
  const [result, setResult] = useState<string>('')
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)

  const betterApproaches = [
    { title: 'Set one-liner (cleanest)', code: 'return [...new Set(arr)];' },
    { title: 'Using filter + indexOf', code: 'return arr.filter((item, index) => arr.indexOf(item) === index);' },
  ]

  const hints = [
    'Create an empty array called "unique". Loop through the input array.',
    'For each item, check if it already exists in "unique" using .includes().',
    'If it does NOT exist, push it in. At the end, return "unique". Alternative shortcut: [...new Set(arr)]',
  ]

  function removeDuplicates(arr: number[]): number[] {
    // Approach: loop through array, build a new array with only unique items
    // For each item, check if it's already in our "unique" array using .includes()
    // If NOT found, push it in. If already there, skip it.
    const unique: number[] = []
    for (let i = 0; i < arr.length; i++) {
      if (!unique.includes(arr[i])) {
        unique.push(arr[i])
      }
    }
    return unique
  }

  const testInput = [1, 2, 2, 3, 4, 4, 5]

  const handleRun = () => {
    const output = removeDuplicates(testInput)
    setResult(`removeDuplicates([1,2,2,3,4,4,5]) → [${output.join(', ')}]`)
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Remove Duplicates from Array</h3>

      <div style={{ marginBottom: 16 }}>
        <button
          onClick={() => setShowExplanation(!showExplanation)}
          style={{ padding: '6px 16px', background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          {showExplanation ? 'Hide Explanation' : 'What does this mean? 🤔'}
        </button>
        {showExplanation && (
          <div style={{ marginTop: 8, background: '#1a1a2e', padding: 16, borderRadius: 8, border: '1px solid #8b5cf6', color: '#e0e0e0', lineHeight: 1.8 }}>
            <p><strong>In simple words:</strong></p>
            <p>You have a list with repeated values: <code>[1, 2, 2, 3, 4, 4, 5]</code>. Remove the extras → <code>[1, 2, 3, 4, 5]</code>.</p>
            <p><strong>Real life example:</strong> Like a guest list with some names written twice. Remove the duplicates so each name appears only once.</p>
            <p><strong>What you need to know:</strong></p>
            <ul>
              <li><code>.includes(item)</code> — checks if an item already exists in an array</li>
              <li><code>.push(item)</code> — adds an item to the end of an array</li>
              <li><strong>Shortcut:</strong> <code>new Set(arr)</code> automatically removes duplicates! A Set only keeps unique values.</li>
            </ul>
          </div>
        )}
      </div>

      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>
        {`Input: [1, 2, 2, 3, 4, 4, 5]\nExpected Output: [1, 2, 3, 4, 5]`}
      </pre>

      <div style={{ marginTop: 12 }}>
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

      <button onClick={handleRun} style={{ marginTop: 12, padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
        Run
      </button>
      {result && (
        <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>
          {result}
        </pre>
      )}

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => setShowFeedback(!showFeedback)}
          style={{ padding: '8px 20px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
        >
          {showFeedback ? 'Hide Feedback' : 'How This Was Solved (Score: 9/10)'}
        </button>
        {showFeedback && (
          <div style={{ marginTop: 10, background: '#1a1a2e', padding: 16, borderRadius: 8, border: '1px solid #22c55e', color: '#e0e0e0' }}>
            <h4 style={{ color: '#3b82f6', marginTop: 0 }}>Step-by-Step Explanation</h4>
            <div style={{ marginBottom: 12, paddingLeft: 10, borderLeft: '3px solid #3b82f6' }}>
              <p style={{ margin: '4px 0', color: '#93c5fd', fontWeight: 'bold' }}>1. Create an empty "unique" array</p>
              <p style={{ margin: '4px 0', color: '#d1d5db', fontSize: 14 }}>This will hold only the items we haven't seen before. Like starting with a blank guest list.</p>
            </div>
            <div style={{ marginBottom: 12, paddingLeft: 10, borderLeft: '3px solid #3b82f6' }}>
              <p style={{ margin: '4px 0', color: '#93c5fd', fontWeight: 'bold' }}>2. Loop through every item in the input array</p>
              <p style={{ margin: '4px 0', color: '#d1d5db', fontSize: 14 }}>We use a <code>for</code> loop: <code>for (let i = 0; i {'<'} arr.length; i++)</code> to visit each number one by one.</p>
            </div>
            <div style={{ marginBottom: 12, paddingLeft: 10, borderLeft: '3px solid #3b82f6' }}>
              <p style={{ margin: '4px 0', color: '#93c5fd', fontWeight: 'bold' }}>3. Check: is this item already in "unique"?</p>
              <p style={{ margin: '4px 0', color: '#d1d5db', fontSize: 14 }}><code>unique.includes(arr[i])</code> returns true if the number is already there. The <code>!</code> means "NOT" — so <code>!unique.includes(arr[i])</code> means "if it's NOT already in unique".</p>
            </div>
            <div style={{ marginBottom: 12, paddingLeft: 10, borderLeft: '3px solid #3b82f6' }}>
              <p style={{ margin: '4px 0', color: '#93c5fd', fontWeight: 'bold' }}>4. If NOT found → push it in</p>
              <p style={{ margin: '4px 0', color: '#d1d5db', fontSize: 14 }}><code>unique.push(arr[i])</code> adds the number to the end of our unique array. If it IS found, we skip it (do nothing).</p>
            </div>
            <div style={{ marginBottom: 12, paddingLeft: 10, borderLeft: '3px solid #3b82f6' }}>
              <p style={{ margin: '4px 0', color: '#93c5fd', fontWeight: 'bold' }}>5. Return the unique array</p>
              <p style={{ margin: '4px 0', color: '#d1d5db', fontSize: 14 }}>After the loop finishes, "unique" has only one copy of each number: <code>[1, 2, 3, 4, 5]</code></p>
            </div>

            <h4 style={{ color: '#f59e0b', marginTop: 16 }}>Walkthrough: [1, 2, 2, 3, 4, 4, 5]</h4>
            <pre style={{ background: '#0f172a', color: '#4ecca3', padding: 10, borderRadius: 6, fontSize: 13, lineHeight: 1.8 }}>
{`i=0: arr[0]=1 → unique=[] has 1? NO  → push → unique=[1]
i=1: arr[1]=2 → unique=[1] has 2? NO  → push → unique=[1,2]
i=2: arr[2]=2 → unique=[1,2] has 2? YES → skip
i=3: arr[3]=3 → unique=[1,2] has 3? NO  → push → unique=[1,2,3]
i=4: arr[4]=4 → unique=[1,2,3] has 4? NO  → push → unique=[1,2,3,4]
i=5: arr[5]=4 → unique=[1,2,3,4] has 4? YES → skip
i=6: arr[6]=5 → unique=[1,2,3,4] has 5? NO  → push → unique=[1,2,3,4,5]

Result: [1, 2, 3, 4, 5] ✓`}
            </pre>

            <h4 style={{ color: '#22c55e', marginTop: 16 }}>Better Approaches</h4>
            {betterApproaches.map((b, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <p style={{ margin: '4px 0', color: '#86efac', fontWeight: 'bold' }}>{b.title}:</p>
                <pre style={{ background: '#0f172a', color: '#4ecca3', padding: 10, borderRadius: 6, fontSize: 13, overflowX: 'auto' }}>
                  {b.code}
                </pre>
              </div>
            ))}

            <h4 style={{ color: '#f59e0b', marginTop: 16 }}>Key Concepts to Remember</h4>
            <ul style={{ color: '#d1d5db', fontSize: 14, lineHeight: 1.8, paddingLeft: 18 }}>
              <li><code>.includes()</code> — checks if an item exists in an array (returns true/false)</li>
              <li><code>.push()</code> — adds an item to the END of an array (mutates the original)</li>
              <li><code>new Set(arr)</code> — a Set automatically removes duplicates. Wrap with <code>[...new Set(arr)]</code> to get back an array.</li>
              <li><code>.filter() + .indexOf()</code> — keeps only the FIRST occurrence of each item</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
