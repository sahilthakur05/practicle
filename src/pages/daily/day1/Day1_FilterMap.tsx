// Day 1 Extra - Q16: Simple Filter & Map
// Practice: .filter() and .map() separately — scored 0/10 on ArrayTransform!

import { useState } from "react";

export default function Day1_FilterMap() {
  const [result, setResult] = useState<string>("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const myMistakes = [
    { issue: 'Used == instead of === for comparison', detail: '== does loose comparison (type coercion), === does strict comparison. Always use === in JavaScript. Example: "2" == 2 is true (bad!), "2" === 2 is false (correct). Your filter works but === is the safer habit.' },
  ];

  const betterApproaches = [
    { title: 'Even cleaner — return directly without variable', code: 'function getEvens(nums: number[]): number[] {\n  return nums.filter(n => n % 2 === 0);\n}\n\nfunction doubleAll(nums: number[]): number[] {\n  return nums.map(n => n * 2);\n}\n\nfunction evenSquares(nums: number[]): number[] {\n  return nums.filter(n => n % 2 === 0).map(n => n * n);\n}\n// No need for intermediate variables — return the result directly!' },
  ];

  const hints = [
    "getEvens: Even number means num % 2 === 0 (no remainder when divided by 2). So: return nums.filter(n => n % 2 === 0). That's it — one line!",
    "doubleAll: .map() transforms EVERY item. To double: return nums.map(n => n * 2). Each number goes in, doubled number comes out.",
    "evenSquares: Chain them! First .filter(n => n % 2 === 0) to keep evens, then .map(n => n * n) to square them. Like: return nums.filter(n => n % 2 === 0).map(n => n * n)",
  ];

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Task 1: Get only EVEN numbers
  function getEvens(nums: number[]): number[] {
    // Use .filter() — keep numbers where num % 2 === 0
    const evenNum = nums.filter((item) => item % 2 == 0);

    // Write your solution here
    return evenNum;
  }

  // Task 2: Double every number
  function doubleAll(nums: number[]): number[] {
    // Use .map() — transform each number to num * 2

    // Write your solution here

    const doubleNum = nums.map((val) => val * 2);

    return doubleNum;
  }

  // Task 3: Get even numbers, then square them
  function evenSquares(nums: number[]): number[] {
    // Chain .filter() then .map()
    // Write your solution here
    const evenSquaresNum = nums
      .filter((item) => item % 2 == 0)
      .map((val) => val * val);
    return evenSquaresNum;
  }

  const handleRun = () => {
    setResult(
      `getEvens([1..10]) → [${getEvens(numbers).join(", ")}]\n` +
        `doubleAll([1..10]) → [${doubleAll(numbers).join(", ")}]\n` +
        `evenSquares([1..10]) → [${evenSquares(numbers).join(", ")}]`,
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Simple Filter & Map</h3>
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
        CRITICAL WEAK SPOT: You scored 0/10 on Array Transform. This is the easy
        version — just .filter() and .map() with simple numbers first.
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
            <h4 style={{ color: "#8b5cf6", marginTop: 0 }}>
              First, what is % (modulo)?
            </h4>
            <p>
              <code>%</code> gives the <strong>remainder</strong> after
              division:
            </p>
            <pre
              style={{
                background: "#0f172a",
                padding: 10,
                borderRadius: 4,
                fontSize: 13,
              }}
            >
              {`4 % 2 = 0   (4 ÷ 2 = 2, remainder 0)  → EVEN ✓
5 % 2 = 1   (5 ÷ 2 = 2, remainder 1)  → ODD ✗
6 % 2 = 0   (6 ÷ 2 = 3, remainder 0)  → EVEN ✓
7 % 2 = 1   (7 ÷ 2 = 3, remainder 1)  → ODD ✗

Rule: if num % 2 === 0 → the number is EVEN`}
            </pre>

            <h4 style={{ color: "#8b5cf6" }}>What does .filter() do?</h4>
            <p>
              .filter() goes through EACH item and asks:{" "}
              <strong>"Should I keep this?"</strong>
            </p>
            <p>
              If your function returns <code>true</code> → item stays. If{" "}
              <code>false</code> → item is removed.
            </p>
            <pre
              style={{
                background: "#0f172a",
                padding: 10,
                borderRadius: 4,
                fontSize: 13,
              }}
            >
              {`[1, 2, 3, 4, 5].filter(n => n % 2 === 0)

Step by step:
  n=1 → 1 % 2 = 1 → 1 === 0? NO  → ❌ removed
  n=2 → 2 % 2 = 0 → 0 === 0? YES → ✅ kept
  n=3 → 3 % 2 = 1 → 1 === 0? NO  → ❌ removed
  n=4 → 4 % 2 = 0 → 0 === 0? YES → ✅ kept
  n=5 → 5 % 2 = 1 �� 1 === 0? NO  → ❌ removed

Result: [2, 4]`}
            </pre>

            <h4 style={{ color: "#8b5cf6" }}>
              So for getEvens, you just write:
            </h4>
            <pre
              style={{
                background: "#0f172a",
                padding: 10,
                borderRadius: 4,
                fontSize: 14,
                color: "#4ecca3",
              }}
            >
              {`function getEvens(nums) {
  return nums.filter(n => n % 2 === 0)
}
// That's it! ONE line!`}
            </pre>

            <div
              style={{
                marginTop: 16,
                padding: 12,
                background: "#1e293b",
                borderRadius: 8,
                border: "1px solid #3b82f6",
              }}
            >
              <p
                style={{
                  color: "#93c5fd",
                  fontWeight: "bold",
                  margin: "0 0 8px 0",
                }}
              >
                Think of .filter() like a security guard:
              </p>
              <p style={{ margin: "4px 0" }}>
                Every number in the array walks up to the guard.
              </p>
              <p style={{ margin: "4px 0" }}>
                The guard checks: <code>n % 2 === 0</code> (are you even?)
              </p>
              <p style={{ margin: "4px 0" }}>
                If YES → you can pass (kept in new array)
              </p>
              <p style={{ margin: "4px 0" }}>
                If NO → go away (removed from new array)
              </p>
              <p style={{ margin: "4px 0" }}>
                Original array is <strong>NOT changed</strong> — filter creates
                a NEW array.
              </p>
            </div>

            <h4 style={{ color: "#8b5cf6", marginTop: 16 }}>
              .map() = transform every item
            </h4>
            <pre
              style={{
                background: "#0f172a",
                padding: 10,
                borderRadius: 4,
                fontSize: 13,
              }}
            >
              {`[1, 2, 3].map(n => n * 10)
// n=1 → 1*10 = 10
// n=2 → 2*10 = 20
// n=3 �� 3*10 = 30
// Result: [10, 20, 30]`}
            </pre>
            <p>
              <strong>Chain them:</strong> <code>.filter(...).map(...)</code> —
              filter first, then transform what's left.
            </p>
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
        {`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Task 1: getEvens → [2, 4, 6, 8, 10]
Task 2: doubleAll → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
Task 3: evenSquares → [4, 16, 36, 64, 100]`}
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
            <h4 style={{ color: '#22c55e', marginTop: 0 }}>Great job! All 3 tasks work correctly!</h4>
            <p style={{ color: '#86efac' }}>You understood .filter(), .map(), and chaining them together. Huge improvement from Q11 (0/10)!</p>

            <h4 style={{ color: '#ef4444', marginTop: 16 }}>Minor Issues</h4>
            {myMistakes.map((m, i) => (
              <div key={i} style={{ marginBottom: 10, paddingLeft: 10, borderLeft: '3px solid #ef4444' }}>
                <p style={{ margin: '4px 0', color: '#fca5a5', fontWeight: 'bold' }}>{i + 1}. {m.issue}</p>
                <p style={{ margin: '4px 0', color: '#d1d5db', fontSize: 14 }}>{m.detail}</p>
              </div>
            ))}

            <h4 style={{ color: '#22c55e', marginTop: 16 }}>Even Cleaner Version</h4>
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
