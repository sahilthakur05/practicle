// Day 1 Extra - Q11: Array Transform Pipeline
// Practice: .map(), .filter(), .reduce() — your array methods score was 5/10!

import { useState } from 'react'

export default function Day1_ArrayTransform() {
  const [result, setResult] = useState<string>('')
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  const myMistakes = [
    { issue: 'Not attempted — all functions return empty/zero', detail: 'None of the 3 functions were implemented. This is the most important topic to practice — .filter(), .map(), .reduce() are used everywhere in React.' },
    { issue: 'Need to learn: .filter() keeps items matching a condition', detail: 'data.filter(s => s.score >= 50) returns a NEW array with only students who passed. Original array is unchanged.' },
    { issue: 'Need to learn: .map() transforms each item', detail: 'data.map(s => s.name) takes an array of objects and returns an array of just names. Same length, different shape.' },
    { issue: 'Need to learn: .reduce() combines everything into one value', detail: 'data.reduce((sum, s) => sum + s.score, 0) adds up all scores starting from 0. The accumulator (sum) carries the running total.' },
  ]

  const betterApproaches = [
    { title: 'Task 1: filter + map chain', code: 'function getPassedNames(data) {\n  return data\n    .filter(s => s.score >= 50)  // keep passed\n    .map(s => s.name);            // extract names\n}' },
    { title: 'Task 2: filter + reduce for average', code: 'function getPassedAverage(data) {\n  const passed = data.filter(s => s.score >= 50);\n  const total = passed.reduce((sum, s) => sum + s.score, 0);\n  return total / passed.length;\n}' },
    { title: 'Task 3: reduce to find max', code: 'function getTopStudent(data) {\n  return data.reduce((best, curr) =>\n    curr.score > best.score ? curr : best\n  ).name;\n}' },
  ]

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
    return data.filter(s => s.score >= 50).map(s => s.name);
  }

  // Task 2: Get the AVERAGE score of passed students
  function getPassedAverage(data: { name: string; score: number }[]): number {
    const passed = data.filter(s => s.score >= 50);
    const total = passed.reduce((sum, s) => sum + s.score, 0);
    return total / passed.length;
  }

  // Task 3: Get the HIGHEST scoring student's name
  function getTopStudent(data: { name: string; score: number }[]): string {
    return data.reduce((best, curr) => curr.score > best.score ? curr : best).name;
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

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => setShowSolution(!showSolution)}
          style={{ padding: '8px 20px', background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold', marginRight: 8 }}
        >
          {showSolution ? 'Hide Solution' : 'Show Solution (You didn\'t solve this)'}
        </button>
        {showSolution && (
          <div style={{ marginTop: 10, background: '#1a1a2e', padding: 16, borderRadius: 8, border: '1px solid #8b5cf6', color: '#e0e0e0' }}>
            <h4 style={{ color: '#8b5cf6', marginTop: 0 }}>How each task works:</h4>

            <div style={{ marginBottom: 16, paddingLeft: 10, borderLeft: '3px solid #3b82f6' }}>
              <p style={{ margin: '6px 0', color: '#93c5fd', fontWeight: 'bold' }}>Task 1: getPassedNames — filter + map</p>
              <p style={{ margin: '4px 0' }}><code>.filter(s =&gt; s.score &gt;= 50)</code> — keeps only students with score 50+</p>
              <p style={{ margin: '4px 0' }}><code>.map(s =&gt; s.name)</code> — extracts just the name from each object</p>
              <p style={{ margin: '4px 0', color: '#9ca3af' }}>Think: filter = "who passes?" then map = "give me their names"</p>
            </div>

            <div style={{ marginBottom: 16, paddingLeft: 10, borderLeft: '3px solid #f59e0b' }}>
              <p style={{ margin: '6px 0', color: '#fbbf24', fontWeight: 'bold' }}>Task 2: getPassedAverage — filter + reduce</p>
              <p style={{ margin: '4px 0' }}><code>.filter(s =&gt; s.score &gt;= 50)</code> — same filter as Task 1</p>
              <p style={{ margin: '4px 0' }}><code>.reduce((sum, s) =&gt; sum + s.score, 0)</code> — adds up all scores, starting from 0</p>
              <p style={{ margin: '4px 0' }}><code>total / passed.length</code> — divide sum by count = average</p>
              <p style={{ margin: '4px 0', color: '#9ca3af' }}>Think: reduce is like a snowball rolling — it accumulates as it goes</p>
            </div>

            <div style={{ marginBottom: 12, paddingLeft: 10, borderLeft: '3px solid #22c55e' }}>
              <p style={{ margin: '6px 0', color: '#86efac', fontWeight: 'bold' }}>Task 3: getTopStudent — reduce to find max</p>
              <p style={{ margin: '4px 0' }}><code>.reduce((best, curr) =&gt; curr.score &gt; best.score ? curr : best)</code></p>
              <p style={{ margin: '4px 0' }}>Compares each student to the current best. If higher score, replace best.</p>
              <p style={{ margin: '4px 0' }}><code>.name</code> — extract the name at the end</p>
              <p style={{ margin: '4px 0', color: '#9ca3af' }}>Think: reduce without initial value uses first element as starting "best"</p>
            </div>

            <h4 style={{ color: '#8b5cf6' }}>The cheat sheet:</h4>
            <pre style={{ background: '#0f172a', color: '#4ecca3', padding: 10, borderRadius: 6, fontSize: 13 }}>
{`.filter(fn)  → keeps items where fn returns true  → smaller array
.map(fn)     → transforms every item with fn       → same-length array
.reduce(fn, init) → combines all into one value     → single result

// Chain them:
data.filter(s => s.score >= 50).map(s => s.name)
// = ["Sahil", "Priya", "Raj", "Neha"]`}
            </pre>
          </div>
        )}
      </div>

      <div style={{ marginTop: 12 }}>
        <button
          onClick={() => setShowFeedback(!showFeedback)}
          style={{ padding: '8px 20px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
        >
          {showFeedback ? 'Hide Feedback' : 'My Mistakes & Feedback (Score: 0/10)'}
        </button>
        {showFeedback && (
          <div style={{ marginTop: 10, background: '#1a1a2e', padding: 16, borderRadius: 8, border: '1px solid #ef4444', color: '#e0e0e0' }}>
            <h4 style={{ color: '#ef4444', marginTop: 0 }}>Mistakes</h4>
            {myMistakes.map((m, i) => (
              <div key={i} style={{ marginBottom: 10, paddingLeft: 10, borderLeft: '3px solid #ef4444' }}>
                <p style={{ margin: '4px 0', color: '#fca5a5', fontWeight: 'bold' }}>{i + 1}. {m.issue}</p>
                <p style={{ margin: '4px 0', color: '#d1d5db', fontSize: 14 }}>{m.detail}</p>
              </div>
            ))}

            <h4 style={{ color: '#22c55e', marginTop: 16 }}>Better Approaches</h4>
            {betterApproaches.map((b, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <p style={{ margin: '4px 0', color: '#86efac', fontWeight: 'bold' }}>{b.title}:</p>
                <pre style={{ background: '#0f172a', color: '#4ecca3', padding: 10, borderRadius: 6, fontSize: 13, overflowX: 'auto' }}>
                  {b.code}
                </pre>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
