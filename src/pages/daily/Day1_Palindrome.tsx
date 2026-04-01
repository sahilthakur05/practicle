// Day 1 - Q9: Palindrome Checker
// Write a function that checks if a string is a palindrome (reads same forwards and backwards).

import { useState } from 'react'

export default function Day1_Palindrome() {
  const [result, setResult] = useState<string>('')
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)

  const myMistakes = [
    { issue: '.trim() does NOT remove spaces in the middle!', detail: '"nurses run".trim() still = "nurses run" — trim only removes leading/trailing spaces. You need .replace(/\\s/g, "") to remove ALL spaces. So "nurses run" test case FAILS.' },
    { issue: 'Both sides need same cleanup', detail: 'You clean the reversed string but the original str also needs spaces removed. Both should go through the same cleanup: lowercase + remove all spaces.' },
    { issue: 'Console.logs left in code', detail: 'Lines 19, 24, 26 all have console.log — always remove debugging logs before finalizing.' },
    { issue: 'toLocaleLowerCase vs toLowerCase', detail: 'toLocaleLowerCase works but toLowerCase is the standard choice. toLocaleLowerCase is for specific locale handling (Turkish, etc.).' },
  ]

  const betterApproaches = [
    { title: 'Clean approach (correct)', code: 'const cleaned = str.toLowerCase().replace(/\\s/g, "");\nconst reversed = cleaned.split("").reverse().join("");\nreturn cleaned === reversed;' },
    { title: 'Two-pointer approach (no reverse needed)', code: 'const cleaned = str.toLowerCase().replace(/\\s/g, "");\nlet left = 0, right = cleaned.length - 1;\nwhile (left < right) {\n  if (cleaned[left] !== cleaned[right]) return false;\n  left++;\n  right--;\n}\nreturn true;' },
  ]

  const hints = [
    'First, clean the string: remove spaces and convert to lowercase.',
    'Then reverse the cleaned string (you already know how from Q1!).',
    'Compare: if the cleaned string equals the reversed string, it\'s a palindrome. Return cleaned === reversed.',
  ]

  function isPalindrome(str: string): boolean {
    console.log(str);
    let val=str.split("").reverse().join("").trim().toLocaleLowerCase()


    
    console.log(val,"val");

    console.log(val===str.toLocaleLowerCase());
    
    
    // Write your solution here

    return val===str.toLocaleLowerCase()
  }

  const testCases = ['racecar', 'hello', 'nurses run', 'Racecar']

  const handleRun = () => {
    const outputs = testCases.map(tc => `isPalindrome("${tc}") → ${isPalindrome(tc)}`)
    setResult(outputs.join('\n'))
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Palindrome Checker</h3>

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
            <p>A palindrome is a word that reads the same forwards and backwards.</p>
            <ul>
              <li><code>"racecar"</code> → reversed is <code>"racecar"</code> → <strong>same!</strong> → palindrome</li>
              <li><code>"hello"</code> → reversed is <code>"olleh"</code> → <strong>different!</strong> → not a palindrome</li>
              <li><code>"nurses run"</code> → remove spaces: <code>"nursesrun"</code> → reversed: <code>"nursesrun"</code> → <strong>palindrome!</strong></li>
            </ul>
            <p><strong>Real life example:</strong> "madam", "level", "radar" — all palindromes!</p>
            <p><strong>What you need to know:</strong></p>
            <ul>
              <li><code>.toLowerCase()</code> — makes "Racecar" become "racecar"</li>
              <li><code>.replace(/\s/g, "")</code> — removes all spaces from a string</li>
              <li>Then just reverse it (like Q1) and compare!</li>
            </ul>
            <p><strong>This question uses what you learned in Q1 (reverse) + a little extra!</strong></p>
          </div>
        )}
      </div>

      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>
        {`Test cases:\n"racecar"    → true\n"hello"      → false\n"nurses run" → true  (ignore spaces)\n"Racecar"    → true  (ignore case)`}
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
          {showFeedback ? 'Hide Feedback' : 'My Mistakes & Feedback (Score: 6/10)'}
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
