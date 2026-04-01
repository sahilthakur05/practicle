// Day 1 Extra - Q12: FizzBuzz
// Practice: Return values, edge cases — you returned 0 instead of max in Q2!

import { useState } from 'react'

export default function Day1_FizzBuzz() {
  const [result, setResult] = useState<string>('')
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)

  const hints = [
    'Use the modulo operator (%). If n % 3 === 0, the number is divisible by 3. If n % 5 === 0, divisible by 5.',
    'Check for BOTH first (n % 3 === 0 && n % 5 === 0 → "FizzBuzz"), THEN check 3 only, THEN 5 only, THEN the number. Order matters!',
    'Push each result into an array. Convert number to string: String(i). Return the ARRAY at the end — don\'t forget to return!',
  ]

  function fizzBuzz(n: number): string[] {
    // For numbers 1 to n:
    // - divisible by 3 AND 5: push "FizzBuzz"
    // - divisible by 3 only: push "Fizz"
    // - divisible by 5 only: push "Buzz"
    // - otherwise: push the number as string
    // Return the array
    // Write your solution here
    return []
  }

  const handleRun = () => {
    const output = fizzBuzz(15)
    setResult(`fizzBuzz(15) →\n[${output.map(s => `"${s}"`).join(', ')}]`)
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>FizzBuzz</h3>
      <p style={{ color: '#f59e0b', fontSize: 13, margin: '0 0 12px 0', padding: '6px 12px', background: '#f59e0b15', borderRadius: 6, border: '1px solid #f59e0b30' }}>
        WEAK SPOT: In Q2 you wrote the logic but returned 0 instead of max. This drills getting return values right and proper conditionals.
      </p>

      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setShowExplanation(!showExplanation)} style={{ padding: '6px 16px', background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          {showExplanation ? 'Hide Explanation' : 'What does this mean? 🤔'}
        </button>
        {showExplanation && (
          <div style={{ marginTop: 8, background: '#1a1a2e', padding: 16, borderRadius: 8, border: '1px solid #8b5cf6', color: '#e0e0e0', lineHeight: 1.8 }}>
            <p><strong>Classic interview question!</strong></p>
            <p>Loop from 1 to n. For each number, decide what to output:</p>
            <ul>
              <li><strong>15</strong> → divisible by both 3 and 5 → <code>"FizzBuzz"</code></li>
              <li><strong>9</strong> → divisible by 3 only → <code>"Fizz"</code></li>
              <li><strong>10</strong> → divisible by 5 only → <code>"Buzz"</code></li>
              <li><strong>7</strong> → not divisible by either → <code>"7"</code></li>
            </ul>
            <p><strong>Key concept:</strong> <code>n % 3 === 0</code> means "n divided by 3 has no remainder"</p>
            <p><strong>Order matters!</strong> Check "both" FIRST. If you check "3" first, you'll never reach "both".</p>
          </div>
        )}
      </div>

      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>
{`fizzBuzz(15) → ["1","2","Fizz","4","Buzz","Fizz","7","8",
"Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]`}
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
