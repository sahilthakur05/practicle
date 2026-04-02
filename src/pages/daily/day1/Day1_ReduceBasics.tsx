// Day 1 Extra - Q17: Reduce Basics
// Practice: .reduce() step by step — you couldn't use it in ArrayTransform!

import { useState } from "react";

export default function Day1_ReduceBasics() {
  const [result, setResult] = useState<string>("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const myMistakes = [
    { issue: 'sumPrices — Correct!', detail: 'nums.reduce((val, num) => val + num, 0) perfectly sums all prices. Starting value 0 is correct.' },
    { issue: 'highestPrice — Works but starting value 0 is risky', detail: 'Starting with 0 works here because all prices are positive. But if prices were [-5, -3, -1], the max would be 0 (wrong!). Safer: use nums[0] as starting value.' },
    { issue: 'countAbove30 — Fixed! Correct after feedback', detail: 'You fixed it with nums.reduce((count, num) => num > 30 ? count + 1 : count, 0). You understood that the accumulator is a counter, not a max tracker. Great improvement!' },
  ];

  const betterApproaches = [
    { title: 'The reduce pattern for different purposes', code: '// SUM:   reduce((sum, n)   => sum + n,                    0)\n// MAX:   reduce((max, n)   => n > max ? n : max,     nums[0])\n// COUNT: reduce((count, n) => condition ? count+1 : count, 0)\n\n// The accumulator name tells you what it does:\n//   sum   = running total\n//   max   = biggest so far\n//   count = how many matched so far' },
  ];

  const hints = [
    ".reduce((accumulator, currentItem) => newAccumulator, startingValue) — the accumulator carries the running result.",
    "Sum example: [1,2,3].reduce((sum, n) => sum + n, 0) → step1: 0+1=1, step2: 1+2=3, step3: 3+3=6 → 6",
    "Find max: [3,1,5,2].reduce((max, n) => n > max ? n : max, nums[0]) — compare each number to current max.",
  ];

  const prices = [29, 15, 45, 8, 62, 33];

  // Task 1: Sum all prices
  function sumPrices(nums: number[]): number {
    // Use .reduce() with starting value 0

    // Write your solution here
    const totalSum = nums.reduce((val, num) => val + num, 0);
    return totalSum;
  }

  // Task 2: Find the highest price
  function highestPrice(nums: number[]): number {
    // Use .reduce() — compare each to current highest
    // Write your solution here
    const getHighest = nums.reduce((val, num) => (val > num ? val : num), 0);
    return getHighest;
  }

  // Task 3: Count how many prices are above 30
  function countAbove30(nums: number[]): number {
    // Use .reduce() — add 1 to count when price > 30
    // Write your solution here
   return nums.reduce((count, num) => {
     // If num > 30, add 1 to count. Otherwise keep count same.
     return num > 30 ? count + 1 : count;
   }, 0);
    

  }

  const handleRun = () => {
    setResult(
      `prices = [${prices.join(", ")}]\n\n` +
        `sumPrices → ${sumPrices(prices)}\n` +
        `highestPrice → ${highestPrice(prices)}\n` +
        `countAbove30 → ${countAbove30(prices)}`,
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Reduce Basics</h3>
      <p
        style={{
          color: "#ef4444",
          fontSize: 13,
          margin: "0 0 12px 0",
          padding: "6px 12px",
          background: "#ef444415",
          borderRadius: 6,
          border: "1px solid #ef444430",
        }}
      >
        CRITICAL WEAK SPOT: You couldn't use .reduce() in Q11. This drills it
        with simple numbers — sum, max, and count.
      </p>

      <div style={{ marginBottom: 16 }}>
        <button
          onClick={() => setShowExplanation(!showExplanation)}
          style={{
            padding: "6px 16px",
            background: "#8b5cf6",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          {showExplanation ? "Hide Explanation" : "What does this mean? 🤔"}
        </button>
        {showExplanation && (
          <div
            style={{
              marginTop: 8,
              background: "#1a1a2e",
              padding: 16,
              borderRadius: 8,
              border: "1px solid #8b5cf6",
              color: "#e0e0e0",
              lineHeight: 1.8,
            }}
          >
            <p>
              <strong>.reduce() = combine all items into ONE value</strong>
            </p>
            <p>
              Think of it like a snowball rolling downhill — it picks up more as
              it goes:
            </p>
            <pre
              style={{
                background: "#0f172a",
                padding: 8,
                borderRadius: 4,
                fontSize: 13,
              }}
            >
              {`[10, 20, 30].reduce((sum, num) => sum + num, 0)

Step 1: sum=0,  num=10 → 0 + 10 = 10
Step 2: sum=10, num=20 → 10 + 20 = 30
Step 3: sum=30, num=30 → 30 + 30 = 60
Result: 60`}
            </pre>
            <p>
              <strong>The pattern:</strong>{" "}
              <code>
                .reduce((accumulator, item) =&gt; newAccumulator, startValue)
              </code>
            </p>
            <ul>
              <li>
                <strong>accumulator</strong> = the running result (sum, max,
                count, etc.)
              </li>
              <li>
                <strong>item</strong> = current array element
              </li>
              <li>
                <strong>startValue</strong> = what accumulator starts as (0 for
                sum/count)
              </li>
            </ul>
          </div>
        )}
      </div>

      <pre
        style={{
          background: "#1a1a2e",
          color: "#e0e0e0",
          padding: 12,
          borderRadius: 8,
        }}
      >
        {`prices = [29, 15, 45, 8, 62, 33]

Task 1: sumPrices → 192
Task 2: highestPrice → 62
Task 3: countAbove30 → 3  (45, 62, 33)`}
      </pre>

      <div style={{ marginTop: 12 }}>
        <button
          onClick={() => {
            setShowHints(!showHints);
            if (!showHints && hintLevel === 0) setHintLevel(1);
          }}
          style={{
            padding: "6px 16px",
            background: "#f59e0b",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          {showHints ? "Hide Hints" : "Show Hints"}
        </button>
        {showHints && (
          <div
            style={{
              marginTop: 8,
              background: "#1a1a2e",
              padding: 12,
              borderRadius: 8,
              border: "1px solid #f59e0b",
            }}
          >
            {hints.slice(0, hintLevel).map((hint, i) => (
              <p key={i} style={{ color: "#fbbf24", margin: "6px 0" }}>
                <strong>Hint {i + 1}:</strong> {hint}
              </p>
            ))}
            {hintLevel < hints.length && (
              <button
                onClick={() => setHintLevel(hintLevel + 1)}
                style={{
                  marginTop: 4,
                  padding: "4px 12px",
                  background: "#92400e",
                  color: "#fbbf24",
                  border: "none",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                Next Hint ({hintLevel}/{hints.length})
              </button>
            )}
          </div>
        )}
      </div>

      <button
        onClick={handleRun}
        style={{
          marginTop: 12,
          padding: "8px 20px",
          background: "#3b82f6",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Run
      </button>
      {result && (
        <pre
          style={{
            marginTop: 12,
            background: "#0f3460",
            color: "#4ecca3",
            padding: 12,
            borderRadius: 8,
            whiteSpace: "pre-wrap",
          }}
        >
          {result}
        </pre>
      )}

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => setShowFeedback(!showFeedback)}
          style={{ padding: '8px 20px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
        >
          {showFeedback ? 'Hide Feedback' : 'My Mistakes & Feedback (Score: 9/10)'}
        </button>
        {showFeedback && (
          <div style={{ marginTop: 10, background: '#1a1a2e', padding: 16, borderRadius: 8, border: '1px solid #ef4444', color: '#e0e0e0' }}>
            <h4 style={{ color: '#ef4444', marginTop: 0 }}>Mistakes</h4>
            {myMistakes.map((m, i) => (
              <div key={i} style={{ marginBottom: 10, paddingLeft: 10, borderLeft: `3px solid ${i === 0 ? '#22c55e' : '#ef4444'}` }}>
                <p style={{ margin: '4px 0', color: i === 0 ? '#86efac' : '#fca5a5', fontWeight: 'bold' }}>{i + 1}. {m.issue}</p>
                <p style={{ margin: '4px 0', color: '#d1d5db', fontSize: 14 }}>{m.detail}</p>
              </div>
            ))}

            <h4 style={{ color: '#22c55e', marginTop: 16 }}>How countAbove30 Should Work</h4>
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
  );
}
