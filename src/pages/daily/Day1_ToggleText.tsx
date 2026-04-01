// Day 1 - Q6: Toggle Show/Hide Text
// Build a component with a button that toggles showing/hiding a paragraph.

import { useState } from 'react'

export default function Day1_ToggleText() {
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)
  const [showText, setShowText] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  const myMistakes = [
    { issue: 'Button text always says "Show"', detail: 'The button should toggle between "Show" and "Hide" based on the state. Use: {showText ? "Hide" : "Show"} instead of hardcoded "Show".' },
    { issue: 'Stale placeholder text left in UI', detail: '"Button doesn\'t work yet — uncomment useState..." is still showing even though it works. Always clean up placeholder instructions after implementing.' },
    { issue: 'Commented-out old code not removed', detail: 'Line 18 still has the commented-out useState template. Clean up dead code after you\'re done.' },
  ]

  const betterApproaches = [
    { title: 'Clean toggle with dynamic button text', code: '<button onClick={() => setShowText(!showText)}>\n  {showText ? "Hide" : "Show"}\n</button>\n{showText && <p>Hello! I am the hidden text.</p>}' },
  ]

  const hints = [
    'Use useState(false) to track if text is visible. Like: const [isVisible, setIsVisible] = useState(false)',
    'Toggle means flip: if true → make false, if false → make true. Use: setIsVisible(!isVisible)',
    'To show/hide: use {isVisible && <p>Your text here</p>}. For button text: {isVisible ? "Hide" : "Show"}',
  ]

  // Write your solution here
  // const [isVisible, setIsVisible] = useState(false)

  return (
    <div style={{ padding: 20 }}>
      <h3>Toggle Show/Hide Text</h3>

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
              You have a button and some hidden text. Click the button → text
              appears. Click again → text disappears.
            </p>
            <p>
              <strong>Real life example:</strong> Like a FAQ section on a
              website — click the question to see the answer, click again to
              hide it.
            </p>
            <p>
              <strong>What you need to know:</strong>
            </p>
            <ul>
              <li>
                <code>useState(false)</code> — false means "text is hidden",
                true means "text is showing"
              </li>
              <li>
                <code>!isVisible</code> — the <code>!</code> flips true to false
                and false to true (called "toggle")
              </li>
              <li>
                <code>{"{isVisible && <p>text</p>}"}</code> — this is how React
                shows/hides things. If isVisible is false, nothing shows.
              </li>
              <li>
                <strong>
                  The "What does this mean?" button above is already doing this!
                </strong>{" "}
                Look at it for reference.
              </li>
            </ul>
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

      {/* YOUR CODE HERE: Add toggle button and conditional text */}
      <div style={{ marginTop: 16 }}>
        <button
          style={{
            padding: "10px 24px",
            fontSize: 16,
            background: "#3b82f6",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
          onClick={()=>setShowText(!showText)}
        >
          Show
        </button>
        <p style={{ color: "#888", marginTop: 12 }}>
          Button doesn't work yet — uncomment useState and add onClick +
          conditional rendering!
        </p>
        {/* When working, show this text: */}
        {/* */}
        {showText && (
          <p
            style={{
              marginTop: 12,
              padding: 16,
              background: "#1a1a2e",
              borderRadius: 8,
              color: "#e0e0e0",
            }}
          >
            Hello! I am the hidden text. You found me! 🎉
          </p>
        )}
      </div>

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
  );
}
