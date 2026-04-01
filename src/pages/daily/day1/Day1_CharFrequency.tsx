// Day 1 Extra - Q15: Character Frequency Counter
// Practice: Objects, loops, edge cases — builds on Q3 (Count Vowels) with objects

import { useState } from 'react'

export default function Day1_CharFrequency() {
  const [result, setResult] = useState<string>('')
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)

  const hints = [
    'Create an empty object: const freq: Record<string, number> = {}. This will store each character and its count.',
    'Loop through each character. For each char: if freq[char] exists, add 1. Otherwise, set it to 1. Like: freq[char] = (freq[char] || 0) + 1',
    'To find the most frequent: loop through Object.entries(freq) and track the one with highest count. Or use Object.entries(freq).reduce().',
  ]

  // Task 1: Count frequency of each character (lowercase, ignore spaces)
  function charFrequency(str: string): Record<string, number> {
    // Write your solution here
    return {}
  }

  // Task 2: Find the most frequent character
  function mostFrequent(str: string): string {
    // Use charFrequency() then find the key with highest value
    return ''
  }

  const testInput = 'javascript'

  const handleRun = () => {
    const freq = charFrequency(testInput)
    const top = mostFrequent(testInput)
    setResult(
      `charFrequency("${testInput}") →\n${JSON.stringify(freq, null, 2)}\n\nmostFrequent("${testInput}") → "${top}"`
    )
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Character Frequency Counter</h3>
      <p style={{ color: '#f59e0b', fontSize: 13, margin: '0 0 12px 0', padding: '6px 12px', background: '#f59e0b15', borderRadius: 6, border: '1px solid #f59e0b30' }}>
        WEAK SPOT: In Q3 you forgot "e" in vowels — this teaches you to work with objects for counting. Also practices edge case handling.
      </p>

      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setShowExplanation(!showExplanation)} style={{ padding: '6px 16px', background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          {showExplanation ? 'Hide Explanation' : 'What does this mean? 🤔'}
        </button>
        {showExplanation && (
          <div style={{ marginTop: 8, background: '#1a1a2e', padding: 16, borderRadius: 8, border: '1px solid #8b5cf6', color: '#e0e0e0', lineHeight: 1.8 }}>
            <p><strong>Count how many times each letter appears in a string.</strong></p>
            <p>Example: <code>"javascript"</code></p>
            <ul>
              <li>"j" appears 1 time</li>
              <li>"a" appears 2 times</li>
              <li>"v" appears 1 time</li>
              <li>etc.</li>
            </ul>
            <p><strong>Key concept — objects as counters:</strong></p>
            <pre style={{ background: '#0f172a', padding: 8, borderRadius: 4, fontSize: 13 }}>
{`const freq = {}
freq["a"] = (freq["a"] || 0) + 1  // first time: 0+1=1
freq["a"] = (freq["a"] || 0) + 1  // second time: 1+1=2`}
            </pre>
            <p>The <code>|| 0</code> trick: if <code>freq["a"]</code> is undefined (first time), use 0 instead. Then add 1.</p>
          </div>
        )}
      </div>

      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>
{`charFrequency("javascript") → { j:1, a:2, v:1, s:1, c:1, r:1, i:1, p:1, t:1 }
mostFrequent("javascript") → "a"  (appears 2 times)`}
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
