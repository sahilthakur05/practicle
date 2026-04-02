// Day 1 Extra - Q15: Character Frequency Counter
// Practice: Objects, loops, edge cases — builds on Q3 (Count Vowels) with objects

import { useState } from 'react'

export default function Day1_CharFrequency() {
  const [result, setResult] = useState<string>('')
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  const myMistakes = [
    { issue: 'Wrong regex syntax: \'/\\&/\',\'g\'', detail: 'This is not valid JS regex. You wrote it as two string arguments. The correct way to remove spaces is: str.replace(/\\s/g, "") — regex literal with g flag inside the slashes.' },
    { issue: 'Returns empty object — no counting logic', detail: 'The function just returns {}. You needed a for loop over each character, using freq[char] = (freq[char] || 0) + 1 to count.' },
    { issue: 'mostFrequent() not attempted', detail: 'This function needed to call charFrequency() first, then loop through Object.entries() to find the key with the highest value.' },
    { issue: 'console.log left in code', detail: 'Debug logs should be removed. They are not part of the solution.' },
  ]

  const betterApproaches = [
    { title: 'charFrequency with object counter', code: 'function charFrequency(str: string): Record<string, number> {\n  const freq: Record<string, number> = {};\n  const cleaned = str.toLowerCase().replace(/\\s/g, "");\n  for (const char of cleaned) {\n    freq[char] = (freq[char] || 0) + 1;\n  }\n  return freq;\n}' },
    { title: 'mostFrequent using Object.entries + reduce', code: 'function mostFrequent(str: string): string {\n  const freq = charFrequency(str);\n  const [topChar] = Object.entries(freq)\n    .reduce((best, curr) => curr[1] > best[1] ? curr : best);\n  return topChar;\n}' },
  ]

  const hints = [
    'Create an empty object: const freq: Record<string, number> = {}. This will store each character and its count.',
    'Loop through each character. For each char: if freq[char] exists, add 1. Otherwise, set it to 1. Like: freq[char] = (freq[char] || 0) + 1',
    'To find the most frequent: loop through Object.entries(freq) and track the one with highest count. Or use Object.entries(freq).reduce().',
  ]

  // Task 1: Count frequency of each character (lowercase, ignore spaces)
  function charFrequency(str: string): Record<string, number> {
    const freq: Record<string, number> = {};
    const cleaned = str.toLowerCase().replace(/\s/g, "");
    for (const char of cleaned) {
      freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
  }

  // Task 2: Find the most frequent character
  function mostFrequent(str: string): string {
    const freq = charFrequency(str);
    const entries = Object.entries(freq);
    if (entries.length === 0) return '';
    const [topChar] = entries.reduce((best, curr) => curr[1] > best[1] ? curr : best);
    return topChar;
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

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => setShowSolution(!showSolution)}
          style={{ padding: '8px 20px', background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold', marginRight: 8 }}
        >
          {showSolution ? 'Hide Solution' : 'Show Solution (You didn\'t solve this)'}
        </button>
        {showSolution && (
          <div style={{ marginTop: 10, background: '#1a1a2e', padding: 16, borderRadius: 8, border: '1px solid #8b5cf6', color: '#e0e0e0' }}>
            <h4 style={{ color: '#8b5cf6', marginTop: 0 }}>How it works step by step:</h4>
            <div style={{ marginBottom: 12, paddingLeft: 10, borderLeft: '3px solid #8b5cf6' }}>
              <p style={{ margin: '6px 0' }}><strong>1. Clean the string:</strong> <code>str.toLowerCase().replace(/\s/g, "")</code> — lowercase + remove all spaces</p>
              <p style={{ margin: '6px 0' }}><strong>2. Loop each character:</strong> <code>for (const char of cleaned)</code> — iterates one character at a time</p>
              <p style={{ margin: '6px 0' }}><strong>3. Count with object:</strong> <code>freq[char] = (freq[char] || 0) + 1</code> — if char not seen yet, start at 0, then add 1</p>
              <p style={{ margin: '6px 0' }}><strong>4. Find most frequent:</strong> <code>Object.entries(freq).reduce()</code> — compare each entry's count, keep the highest</p>
            </div>
            <h4 style={{ color: '#8b5cf6' }}>Key pattern to remember:</h4>
            <pre style={{ background: '#0f172a', color: '#4ecca3', padding: 10, borderRadius: 6, fontSize: 13 }}>
{`// Counting pattern — works for ANY counting problem
const counts: Record<string, number> = {};
for (const item of items) {
  counts[item] = (counts[item] || 0) + 1;
}

// Finding max from object
const [maxKey] = Object.entries(counts)
  .reduce((best, curr) => curr[1] > best[1] ? curr : best);`}
            </pre>
          </div>
        )}
      </div>

      <div style={{ marginTop: 12 }}>
        <button
          onClick={() => setShowFeedback(!showFeedback)}
          style={{ padding: '8px 20px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
        >
          {showFeedback ? 'Hide Feedback' : 'My Mistakes & Feedback (Score: 1/10)'}
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
