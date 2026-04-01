// Day 1 - Q1: Reverse a String
// Write a function that takes a string and returns it reversed.

import { useState } from 'react'

export default function Day1_ReverseString() {
  const [result, setResult] = useState<string>('')
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)

  const myMistakes = [
    { issue: 'Console logs left in code', detail: 'Lines 23-25 have console.log statements — always remove debugging logs before finalizing.' },
    { issue: 'Unnecessary intermediate variables', detail: 'Created 3 separate variables (spl, rvs, joinStr) for what can be done in one line: str.split("").reverse().join("")' },
    { issue: '.reverse() mutates the original array', detail: 'spl and rvs point to the same array after .reverse(). So console.log(spl) also prints the reversed version. This is a common JS gotcha.' },
  ]

  const betterApproaches = [
    { title: 'One-liner (clean)', code: 'return str.split("").reverse().join("");' },
    { title: 'Without built-in reverse (interview-level)', code: 'let reversed = "";\nfor (let i = str.length - 1; i >= 0; i--) {\n  reversed += str[i];\n}\nreturn reversed;' },
  ]

  const hints = [
    'A string can be converted to an array of characters using .split("")',
    'An array has a .reverse() method that reverses its elements.',
    'After reversing the array, use .join("") to convert it back to a string. So: str.split("").reverse().join("")',
  ]

  function reverseString(str: string): string {
    // Write your solution here
    // let spl = str.split('')
    // let rvs= spl.reverse()
    // let joinStr = rvs.join("")
    // console.log(spl);
    // console.log(rvs);
    // console.log(joinStr);
    
    let reversed=''
    for(let i=str.length-1;i>=0;i--){
      console.log(str[i]);
      
      reversed+=str[i]
    }
    return reversed
    // return joinStr
  }

  const testInput = 'hello'

  const handleRun = () => {
    const output = reverseString(testInput)
    setResult(`reverseString("${testInput}") → "${output}"`)
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Reverse a String</h3>

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
            <p>You get a word like <code>"hello"</code>. You need to flip it backwards → <code>"olleh"</code>.</p>
            <p>Think of it like reading a word from right to left.</p>
            <p><strong>Real life example:</strong> Like looking at text in a mirror!</p>
            <p><strong>What you need to know:</strong></p>
            <ul>
              <li><code>"hello".split("")</code> → turns string into array: <code>["h","e","l","l","o"]</code></li>
              <li><code>.reverse()</code> → flips array: <code>["o","l","l","e","h"]</code></li>
              <li><code>.join("")</code> → joins array back into string: <code>"olleh"</code></li>
            </ul>
          </div>
        )}
      </div>

      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>
        {`Input: "hello"\nExpected Output: "olleh"`}
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
          {showFeedback ? 'Hide Feedback' : 'My Mistakes & Feedback (Score: 7/10)'}
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
