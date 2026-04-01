// Day 1 - Q2: Find the Largest Number
// Write a function that takes an array of numbers and returns the largest one.

import { useState } from 'react'

export default function Day1_FindLargest() {
  const [result, setResult] = useState<string>('')
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)

  const myMistakes = [
    { issue: 'Returns 0 instead of max', detail: 'You found the max correctly inside the loop but then wrote "return 0" instead of "return max". The function always returns 0 no matter what.' },
    { issue: 'Initialized max = 0 instead of nums[0]', detail: 'If all numbers are negative (e.g., [-5, -2, -8]), max stays 0 which is wrong. Always start with the first element: let max = nums[0].' },
    { issue: 'Console logs everywhere', detail: 'Lines 20, 24, 26, 28 all have console.log — remove all debugging logs before finalizing.' },
  ]

  const betterApproaches = [
    { title: 'Clean for loop', code: 'let max = nums[0];\nfor (let i = 1; i < nums.length; i++) {\n  if (nums[i] > max) max = nums[i];\n}\nreturn max;' },
    { title: 'Math.max one-liner', code: 'return Math.max(...nums);' },
    { title: 'Using reduce', code: 'return nums.reduce((max, n) => n > max ? n : max, nums[0]);' },
  ]

  const hints = [
    'Start by assuming the first number is the largest. Store it in a variable called "max".',
    'Loop through the array. For each number, check: is it bigger than my current "max"?',
    'If yes, update max to that number. After the loop ends, return max.',
  ]

  function findLargest(nums: number[]): number {
    // Write your solution here
    console.log(nums);
    let max = 0

for(let i =0; i <nums.length;i++){
console.log(i,nums[i]);
if(nums[i]>max){
  console.log("ggreater");
  max=nums[i]
  console.log(max);
  
}

}
    return 0
  }

  const testInput = [3, 7, 2, 9, 1]

  const handleRun = () => {
    const output = findLargest(testInput)
    setResult(`findLargest([3, 7, 2, 9, 1]) → ${output}`)
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>Find the Largest Number</h3>

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
            <p>You have a list of numbers like <code>[3, 7, 2, 9, 1]</code>. Find which one is the biggest → <code>9</code>.</p>
            <p><strong>Real life example:</strong> Like finding the tallest person in a group. You compare each person one by one and remember the tallest so far.</p>
            <p><strong>What you need to know:</strong></p>
            <ul>
              <li><code>for</code> loop — to go through each number one by one</li>
              <li><code>if (num {'>'} max)</code> — to compare and keep track of the biggest</li>
              <li>Start with the first number as your "current biggest"</li>
            </ul>
          </div>
        )}
      </div>

      <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8 }}>
        {`Input: [3, 7, 2, 9, 1]\nExpected Output: 9`}
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
          {showFeedback ? 'Hide Feedback' : 'My Mistakes & Feedback (Score: 4/10)'}
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
