// Day 1 - Q5: Counter — Increment, Decrement & Reset
// Build a counter component with three buttons: +1, -1, and Reset.

import { useState } from "react";

export default function Day1_Counter() {
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [count, setCount] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const myMistakes = [
    { issue: 'Stale text left in UI', detail: 'The text "Buttons don\'t work yet — uncomment useState and add onClick handlers!" is still showing even though the buttons work. Always clean up placeholder text after implementing.' },
    { issue: 'Using count + 1 instead of functional update', detail: 'setCount(count + 1) can be stale if called multiple times in quick succession. Better: setCount(prev => prev + 1) to always use the latest value.' },
    { issue: 'No minimum/maximum boundary', detail: 'The counter can go into negative infinity. Depending on the use case, you might want to prevent going below 0.' },
  ];

  const betterApproaches = [
    { title: 'Functional updates (safer)', code: 'onClick={() => setCount(prev => prev + 1)}\nonClick={() => setCount(prev => prev - 1)}\nonClick={() => setCount(0)}' },
  ];

  const hints = [
    "Use useState(0) to create a count variable. Like: const [count, setCount] = useState(0)",
    "For +1 button: onClick={() => setCount(count + 1)}. For -1: onClick={() => setCount(count - 1)}",
    "For Reset: onClick={() => setCount(0)}. Display count in a <h2> or <p> tag.",
  ];

  // Write your solution here — create state and button handlers
  // const [count, setCount] = useState(0)

  return (
    <div style={{ padding: 20 }}>
      <h3>Counter Component</h3>

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
              <strong>In simple words:</strong>
            </p>
            <p>
              Build a simple number counter. It starts at 0. You have 3 buttons:
            </p>
            <ul>
              <li>
                <strong>+1</strong> → number goes up (0 → 1 → 2 → 3...)
              </li>
              <li>
                <strong>-1</strong> → number goes down (3 → 2 → 1 → 0...)
              </li>
              <li>
                <strong>Reset</strong> → number goes back to 0
              </li>
            </ul>
            <p>
              <strong>What you need to know:</strong>
            </p>
            <ul>
              <li>
                <code>useState(0)</code> — creates a variable that React can
                track and update on screen
              </li>
              <li>
                <code>setCount(count + 1)</code> — updates the count and React
                automatically re-renders the UI
              </li>
              <li>
                <code>onClick</code> — runs a function when a button is clicked
              </li>
            </ul>
            <p>
              <strong>This is the most basic React pattern!</strong> Almost
              every React app uses useState.
            </p>
          </div>
        )}
      </div>

      <div style={{ marginBottom: 12 }}>
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

      {/* YOUR CODE HERE: Add count display and buttons */}
      <div style={{ textAlign: "center", padding: 20 }}>
        <h2 style={{ fontSize: 48, margin: "16px 0" }}>{count}</h2>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button
            style={{
              padding: "10px 24px",
              fontSize: 18,
              background: "#ef4444",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
            onClick={() => setCount(count - 1)}
          >
            -1
          </button>
          <button
            style={{
              padding: "10px 24px",
              fontSize: 18,
              background: "#6b7280",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
            onClick={()=>setCount(0)}
          >
            Reset
          </button>
          <button
            style={{
              padding: "10px 24px",
              fontSize: 18,
              background: "#22c55e",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
            onClick={()=>setCount(count+1)}
          >
            +1
          </button>
        </div>
      </div>

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
  );
}
