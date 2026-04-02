// Day 1 Extra - Q10: Clean & Compare Strings
// Practice: .replace(), .trim(), .toLowerCase() — you used .trim() wrong in Q9!

import { useState } from 'react'

export default function Day1_CleanString() {
  const [result, setResult] = useState<string>('')
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)

  const myMistakes = [
    { issue: 'No spaces around operators', detail: 'Write cleaned1 = str1.replace(...) not cleaned1= str1.replace(...). Consistent spacing makes code more readable.' },
    { issue: 'Using let instead of const', detail: 'cleaned1 and cleaned2 are never reassigned, so use const instead of let. Only use let when you plan to change the value later.' },
  ]

  const betterApproaches = [
    { title: 'One-liner comparison (clean)', code: 'return str1.replace(/\\s/g, "").toLowerCase() === str2.replace(/\\s/g, "").toLowerCase();' },
    { title: 'With a reusable clean helper', code: 'const clean = (s: string) => s.replace(/\\s/g, "").toLowerCase();\nreturn clean(str1) === clean(str2);' },
  ]

  const hints = [
    '.trim() only removes spaces from START and END of a string — NOT from the middle!',
    '.replace(/\\s/g, "") removes ALL spaces everywhere. The "g" means "global" (find all matches, not just first).',
    'Chain them: str.toLowerCase().replace(/\\s/g, "") to both lowercase AND remove all spaces. Do this for BOTH strings, then compare with ===',
  ]

  function cleanAndCompare(str1: string, str2: string): boolean {
    // Clean both strings: remove ALL spaces, make lowercase, then compare
    // Write your solution here


    let cleaned1= str1.replace(/\s/g,"").toLowerCase()
    let cleaned2= str2.replace(/\s/g,"").toLowerCase()

    
    return cleaned1===cleaned2
  }

  const testCases = [
    { a: 'Hello World', b: 'helloworld', expected: true },
    { a: '  React JS  ', b: 'reactjs', expected: true },
    { a: 'JavaScript', b: 'java script', expected: true },
    { a: 'Hello', b: 'World', expected: false },
  ]

  const handleRun = () => {
    const outputs = testCases.map(
      tc => `cleanAndCompare("${tc.a}", "${tc.b}") → ${cleanAndCompare(tc.a, tc.b)} ${cleanAndCompare(tc.a, tc.b) === tc.expected ? '✓' : '✗ expected ' + tc.expected}`
    )
    setResult(outputs.join('\n'))
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Clean & Compare Strings</h3>
      <p style={{ color: '#f59e0b', fontSize: 13, margin: '0 0 12px 0', padding: '6px 12px', background: '#f59e0b15', borderRadius: 6, border: '1px solid #f59e0b30' }}>
        WEAK SPOT: You used .trim() in Q9 Palindrome but it doesn't remove middle spaces. This drills .trim() vs .replace().
      </p>

      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setShowExplanation(!showExplanation)} style={{ padding: '6px 16px', background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          {showExplanation ? 'Hide Explanation' : 'What does this mean? 🤔'}
        </button>
        {showExplanation && (
          <div style={{ marginTop: 8, background: '#1a1a2e', padding: 16, borderRadius: 8, border: '1px solid #8b5cf6', color: '#e0e0e0', lineHeight: 1.8 }}>
            <p><strong>The difference you need to learn:</strong></p>
            <ul>
              <li><code>"  hello  ".trim()</code> → <code>"hello"</code> — removes spaces from edges only</li>
              <li><code>"he llo".trim()</code> → <code>"he llo"</code> — middle space STAYS!</li>
              <li><code>"he llo".replace(/\s/g, "")</code> → <code>"hello"</code> — removes ALL spaces</li>
            </ul>
            <p><strong>Task:</strong> Given two strings, clean both (remove all spaces + lowercase) and check if they match.</p>
          </div>
        )}
      </div>

      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>
{`cleanAndCompare("Hello World", "helloworld") → true
cleanAndCompare("  React JS  ", "reactjs")    → true
cleanAndCompare("JavaScript", "java script")  → true
cleanAndCompare("Hello", "World")             → false`}
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
      {result && <pre style={{ marginTop: 12, background: '#0f3460', color: '#4ecca3', padding: 12, borderRadius: 8 }}>{result}</pre>}

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => setShowFeedback(!showFeedback)}
          style={{ padding: '8px 20px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
        >
          {showFeedback ? 'Hide Feedback' : 'My Mistakes & Feedback (Score: 8/10)'}
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
