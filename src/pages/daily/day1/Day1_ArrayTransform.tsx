// Day 1 Extra - Q11: Array Transform Pipeline
// Practice: .map(), .filter(), .reduce() — your array methods score was 5/10!

import { useState } from 'react'

export default function Day1_ArrayTransform() {
  const [result, setResult] = useState<string>('')
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)

  const hints = [
    '.filter(fn) keeps items where fn returns true. Example: [1,2,3,4].filter(n => n > 2) → [3,4]',
    '.map(fn) transforms every item. Example: [{name:"A",score:5}].map(s => s.name) → ["A"]',
    '.reduce(fn, start) combines all into one value. Example: [1,2,3].reduce((sum, n) => sum + n, 0) → 6. Chain them: arr.filter(...).map(...).reduce(...)',
  ]

  const students = [
    { name: 'Sahil', score: 85 },
    { name: 'Amit', score: 42 },
    { name: 'Priya', score: 91 },
    { name: 'Raj', score: 55 },
    { name: 'Neha', score: 78 },
    { name: 'Vikram', score: 38 },
  ]

  // Task 1: Get names of students who PASSED (score >= 50)
  function getPassedNames(data: { name: string; score: number }[]): string[] {
    // Use .filter() then .map()
    return []
  }

  // Task 2: Get the AVERAGE score of passed students
  function getPassedAverage(data: { name: string; score: number }[]): number {
    // Use .filter(), then .reduce() to sum, then divide by length
    return 0
  }

  // Task 3: Get the HIGHEST scoring student's name
  function getTopStudent(data: { name: string; score: number }[]): string {
    // Use .reduce() to find the student with highest score
    return ''
  }

  const handleRun = () => {
    const passed = getPassedNames(students)
    const avg = getPassedAverage(students)
    const top = getTopStudent(students)
    setResult(
      `Passed students: [${passed.join(', ')}]\n` +
      `Average of passed: ${avg}\n` +
      `Top student: ${top}`
    )
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Array Transform Pipeline</h3>
      <p style={{ color: '#f59e0b', fontSize: 13, margin: '0 0 12px 0', padding: '6px 12px', background: '#f59e0b15', borderRadius: 6, border: '1px solid #f59e0b30' }}>
        WEAK SPOT: Your Array Methods score was 5/10. This drills .filter(), .map(), and .reduce() together on real data.
      </p>

      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setShowExplanation(!showExplanation)} style={{ padding: '6px 16px', background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          {showExplanation ? 'Hide Explanation' : 'What does this mean? 🤔'}
        </button>
        {showExplanation && (
          <div style={{ marginTop: 8, background: '#1a1a2e', padding: 16, borderRadius: 8, border: '1px solid #8b5cf6', color: '#e0e0e0', lineHeight: 1.8 }}>
            <p><strong>The Big 3 Array Methods:</strong></p>
            <ul>
              <li><code>.filter()</code> = <strong>keep some items</strong> → returns a smaller array</li>
              <li><code>.map()</code> = <strong>transform every item</strong> → returns same-length array with different values</li>
              <li><code>.reduce()</code> = <strong>combine all into one value</strong> → returns a single number/string/object</li>
            </ul>
            <p><strong>Think of it like a factory line:</strong> filter removes bad items → map transforms them → reduce counts them up.</p>
            <p><strong>You can chain:</strong> <code>arr.filter(...).map(...).reduce(...)</code></p>
          </div>
        )}
      </div>

      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>
{`Students: Sahil(85), Amit(42), Priya(91), Raj(55), Neha(78), Vikram(38)

Task 1: Names of passed students (score >= 50)
→ ["Sahil", "Priya", "Raj", "Neha"]

Task 2: Average score of passed students
→ 77.25

Task 3: Top student name
→ "Priya"`}
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

      <button onClick={handleRun} style={{ marginTop: 12, padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Run</button>
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8, whiteSpace: 'pre-wrap' }}>{result}</pre>}
    </div>
  )
}
