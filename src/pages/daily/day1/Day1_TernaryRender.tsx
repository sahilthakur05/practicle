// Day 1 Extra - Q19: Ternary Rendering (Simple)
// Practice: Conditional rendering with ternary — scored 3/10 on ConditionalCard!

import { useState } from "react";

export default function Day1_TernaryRender() {
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const myMistakes = [
    { issue: 'Ternary used correctly! Huge improvement from Q13 (3/10)', detail: 'You used mode === "login" ? (...) : (...) and only ONE form shows at a time. This is exactly the pattern that was broken in ConditionalCard.' },
    { issue: 'Placeholder text still showing above the form', detail: 'The "Build your login/signup form here" and "Uncomment the useState" text is still in the JSX. You should remove it since you\'ve built the form.' },
    { issue: 'Ternary is OUTSIDE the card div', detail: 'The styled card div (with dark background) contains only the placeholder text. Your actual form renders below it, unstyled. Move the ternary INSIDE the card div.' },
    { issue: 'Unnecessary Fragment wrappers', detail: '<>{" "}<div>...</div></> — the outer Fragment and {" "} are not needed. The <div> alone is enough since ternary already handles one-or-the-other.' },
    { issue: 'Inputs and buttons are unstyled', detail: 'Plain HTML inputs/buttons with no styling look broken in the dark theme. Add some basic styles to match the rest of the UI.' },
  ];

  const betterApproaches = [
    { title: 'Clean version with ternary inside the card', code: '<div style={{ maxWidth: 400, padding: 24, background: "#1a1a2e",\n  borderRadius: 12, border: "1px solid #333" }}>\n  {mode === "login" ? (\n    <div>\n      <h4>Login</h4>\n      <input placeholder="Email" style={{...}} />\n      <input placeholder="Password" type="password" style={{...}} />\n      <button onClick={() => alert("Login!")}>Login</button>\n      <p>Don\'t have an account?\n        <a onClick={() => setMode("signup")}> Create one</a>\n      </p>\n    </div>\n  ) : (\n    <div>\n      <h4>Sign Up</h4>\n      <input placeholder="Name" style={{...}} />\n      <input placeholder="Email" style={{...}} />\n      <input placeholder="Password" type="password" style={{...}} />\n      <button onClick={() => alert("Signed up!")}>Sign Up</button>\n      <p>Already have an account?\n        <a onClick={() => setMode("login")}> Login</a>\n      </p>\n    </div>\n  )}\n</div>' },
  ];

  const hints = [
    'useState for mode: const [mode, setMode] = useState<"login"|"signup">("login"). This tracks which form to show.',
    'Use ternary in JSX: {mode === "login" ? (<LoginForm/>) : (<SignupForm/>)} — only ONE shows at a time!',
    'Each form needs inputs + a switch link: <a onClick={() => setMode("signup")}>Create account</a>',
  ];

  // Write your solution here
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div style={{ padding: 20 }}>
      <h3>Login / Signup Switch</h3>
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
        CRITICAL WEAK SPOT: You scored 3/10 on ConditionalCard — used && instead
        of ternary, showed all modes at once. This is the simple version: just 2
        modes.
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
              <strong>
                Build a form that switches between Login and Signup:
              </strong>
            </p>
            <ul>
              <li>
                <strong>Login mode:</strong> Email + Password inputs, Login
                button, "Create account" link
              </li>
              <li>
                <strong>Signup mode:</strong> Name + Email + Password inputs,
                Signup button, "Already have account?" link
              </li>
            </ul>
            <p>
              <strong>The KEY rule:</strong> Only ONE form shows at a time. Use
              ternary:
            </p>
            <pre
              style={{
                background: "#0f172a",
                padding: 8,
                borderRadius: 4,
                fontSize: 13,
              }}
            >
              {`{mode === "login" ? (
  <div>
    <input placeholder="Email" />
    <input placeholder="Password" />
    <button>Login</button>
    <a onClick={() => setMode("signup")}>Create account</a>
  </div>
) : (
  <div>
    <input placeholder="Name" />
    <input placeholder="Email" />
    <input placeholder="Password" />
    <button>Sign Up</button>
    <a onClick={() => setMode("login")}>Already have account?</a>
  </div>
)}`}
            </pre>
            <p>
              <strong>NOT this (wrong — both show):</strong>
            </p>
            <pre
              style={{
                background: "#0f172a",
                padding: 8,
                borderRadius: 4,
                fontSize: 13,
                color: "#ef4444",
              }}
            >
              {`{mode === "login" && <LoginForm/>}   ← WRONG
{mode === "signup" && <SignupForm/>}  ← WRONG`}
            </pre>
          </div>
        )}
      </div>

      <div style={{ marginTop: 12, marginBottom: 12 }}>
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

      {/* YOUR CODE HERE: Build the login/signup toggle form */}
      <div
        style={{
          maxWidth: 400,
          margin: "16px 0",
          padding: 24,
          background: "#1a1a2e",
          borderRadius: 12,
          border: "1px solid #333",
        }}
      >
        <p style={{ color: "#888" }}>
          Build your login/signup form here using ternary rendering.
        </p>
        <p style={{ color: "#666", fontSize: 13 }}>
          Uncomment the useState and replace this placeholder.
        </p>
      </div>

      {mode === "login" ? (
        <>
          {" "}
          <div>
            <input placeholder="Email" />
            <input placeholder="Password" />
            <button>Login</button>
            <a onClick={() => setMode("signup")}>Create account</a>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Password" />
            <button>Sign Up</button>
            <a onClick={() => setMode("login")}>Already have account?</a>
          </div>
        </>
      )}

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => setShowFeedback(!showFeedback)}
          style={{ padding: '8px 20px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
        >
          {showFeedback ? 'Hide Feedback' : 'My Mistakes & Feedback (Score: 7/10)'}
        </button>
        {showFeedback && (
          <div style={{ marginTop: 10, background: '#1a1a2e', padding: 16, borderRadius: 8, border: '1px solid #ef4444', color: '#e0e0e0' }}>
            <h4 style={{ color: '#22c55e', marginTop: 0 }}>Ternary rendering works! Big improvement from Q13 (3/10)</h4>

            <h4 style={{ color: '#ef4444', marginTop: 16 }}>Issues</h4>
            {myMistakes.map((m, i) => (
              <div key={i} style={{ marginBottom: 10, paddingLeft: 10, borderLeft: `3px solid ${i === 0 ? '#22c55e' : '#ef4444'}` }}>
                <p style={{ margin: '4px 0', color: i === 0 ? '#86efac' : '#fca5a5', fontWeight: 'bold' }}>{i + 1}. {m.issue}</p>
                <p style={{ margin: '4px 0', color: '#d1d5db', fontSize: 14 }}>{m.detail}</p>
              </div>
            ))}

            <h4 style={{ color: '#22c55e', marginTop: 16 }}>Better Version</h4>
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
