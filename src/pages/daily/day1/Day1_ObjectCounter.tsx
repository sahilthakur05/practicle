// Day 1 Extra - Q18: Object Counter (Word Frequency)
// Practice: Objects as counters — scored 1/10 on CharFrequency!

import { useState } from 'react'

export default function Day1_ObjectCounter() {
  const [result, setResult] = useState<string>('')
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)

  const myMistakes = [
    { issue: 'Did not solve by yourself — copied from solution/hints', detail: 'The code is correct but you need to be able to write this pattern from memory. The key line is: counts[word] = (counts[word] || 0) + 1. Practice writing it without looking!' },
    { issue: 'No spaces around = and ||', detail: 'counts[word]=(counts[word]||0)+1 works but is hard to read. Add spaces: counts[word] = (counts[word] || 0) + 1' },
  ]

  const betterApproaches = [
    { title: 'Practice writing this from memory', code: '// The object counter pattern — memorize this!\n// Step 1: Split into pieces\n// Step 2: Create empty object\n// Step 3: Loop + count\n\nconst words = sentence.split(" ");\nconst counts: Record<string, number> = {};\nfor (const word of words) {\n  counts[word] = (counts[word] || 0) + 1;\n}\nreturn counts;\n\n// This SAME pattern works for:\n// - Counting characters in a string\n// - Counting occurrences of anything\n// - Grouping items by category' },
  ]

  const hints = [
    'Split the sentence into words: sentence.split(" ") → ["the", "cat", "sat", ...]',
    'Create an empty object. Loop through words. For each word: counts[word] = (counts[word] || 0) + 1',
    'The || 0 trick: if counts[word] is undefined (first time seeing it), treat it as 0. Then add 1.',
  ]

  // Task: Count how many times each word appears
  function wordCount(sentence: string): Record<string, number> {
    // Step 1: split sentence into words array
    // Step 2: create empty counts object
    // Step 3: loop through words, count each one
    // Write your solution here

const words = sentence.split(" ");
  const counts: Record<string, number> = {};
  for (const word of words) {
    counts[word]=(counts[word]||0)+1
  }
    return counts
  }

  const testSentence = "the cat sat on the mat the cat"

  const handleRun = () => {
    const counts = wordCount(testSentence)
    setResult(
      `wordCount("${testSentence}") →\n${JSON.stringify(counts, null, 2)}`
    )
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Word Frequency Counter</h3>
      <p style={{ color: '#ef4444', fontSize: 13, margin: '0 0 12px 0', padding: '6px 12px', background: '#ef444415', borderRadius: 6, border: '1px solid #ef444430' }}>
        CRITICAL WEAK SPOT: You scored 1/10 on CharFrequency — wrong regex, no counting logic. This is the simpler version: count WORDS instead of characters.
      </p>

      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setShowExplanation(!showExplanation)} style={{ padding: '6px 16px', background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          {showExplanation ? 'Hide Explanation' : 'What does this mean? 🤔'}
        </button>
        {showExplanation && (
          <div style={{ marginTop: 8, background: '#1a1a2e', padding: 16, borderRadius: 8, border: '1px solid #8b5cf6', color: '#e0e0e0', lineHeight: 1.8 }}>
            <p><strong>Using objects to count things — the most useful pattern in JS!</strong></p>
            <pre style={{ background: '#0f172a', padding: 8, borderRadius: 4, fontSize: 13 }}>
{`const counts = {};

// First time seeing "cat":
counts["cat"]  // undefined
counts["cat"] || 0  // 0 (because undefined is falsy)
(counts["cat"] || 0) + 1  // 1
counts["cat"] = 1  ✓

// Second time seeing "cat":
counts["cat"]  // 1
counts["cat"] || 0  // 1 (1 is truthy, so || 0 is skipped)
(counts["cat"] || 0) + 1  // 2
counts["cat"] = 2  ✓`}
            </pre>
            <p><strong>The one-liner:</strong> <code>counts[word] = (counts[word] || 0) + 1</code></p>
          </div>
        )}
      </div>

      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>
{`wordCount("the cat sat on the mat the cat") →
{
  "the": 3,
  "cat": 2,
  "sat": 1,
  "on": 1,
  "mat": 1
}`}
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
          onClick={() => setShowFeedback(!showFeedback)}
          style={{ padding: '8px 20px', background: '#f59e0b', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
        >
          {showFeedback ? 'Hide Feedback' : 'My Mistakes & Feedback (Score: 5/10 — not self-solved)'}
        </button>
        {showFeedback && (
          <div style={{ marginTop: 10, background: '#1a1a2e', padding: 16, borderRadius: 8, border: '1px solid #f59e0b', color: '#e0e0e0' }}>
            <h4 style={{ color: '#f59e0b', marginTop: 0 }}>Honest Assessment: Code is correct but not self-solved</h4>
            <p style={{ color: '#fbbf24' }}>You got the right answer by looking at hints/solution. That's okay for learning, but you need to practice writing this from scratch next time.</p>

            <h4 style={{ color: '#ef4444', marginTop: 16 }}>Issues</h4>
            {myMistakes.map((m, i) => (
              <div key={i} style={{ marginBottom: 10, paddingLeft: 10, borderLeft: '3px solid #f59e0b' }}>
                <p style={{ margin: '4px 0', color: '#fca5a5', fontWeight: 'bold' }}>{i + 1}. {m.issue}</p>
                <p style={{ margin: '4px 0', color: '#d1d5db', fontSize: 14 }}>{m.detail}</p>
              </div>
            ))}

            <h4 style={{ color: '#22c55e', marginTop: 16 }}>Memorize This Pattern</h4>
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
