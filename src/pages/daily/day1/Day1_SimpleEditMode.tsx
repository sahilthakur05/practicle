// Day 1 Extra - Q20: Simple Edit Mode (Name Card)
// Practice: Edit mode with state — scored 4/10 on EditableList, 5/10 on ProfileCard!

import { useState } from "react";

export default function Day1_SimpleEditMode() {
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const myMistakes = [
    { issue: 'Ternary rendering works! View/edit switch is correct', detail: 'You used isEditing ? (<edit UI>) : (<view UI>) and only ONE mode shows at a time. Huge improvement from Q8 ProfileCard (5/10) where edit showed BELOW view!' },
    { issue: 'handleEdit doesn\'t copy name to editValue!', detail: 'When you click Edit, the input starts EMPTY because editValue is still "". You need: setEditValue(name) in handleEdit. Without this, the user has to retype the entire name even for a small change.' },
    { issue: 'Placeholder text still showing above the form', detail: '"Build your name card with edit mode here" and "Uncomment the useState" are still in the JSX. Remove them since you\'ve built the solution.' },
    { issue: 'No styling on inputs and buttons', detail: 'Plain HTML elements with no styles look broken in the dark theme. Add basic styles to match the rest of the UI.' },
  ];

  const betterApproaches = [
    { title: 'Fixed handleEdit — always copy name to editValue', code: 'const handleEdit = () => {\n  setIsEditing(true);\n  setEditValue(name);  // ← THIS IS THE KEY LINE!\n  // Now the input starts with "Sahil" instead of empty\n};\n\nconst handleSave = () => {\n  setName(editValue);\n  setIsEditing(false);\n};\n\nconst handleCancel = () => {\n  setIsEditing(false);\n  // editValue is discarded — name stays unchanged\n};' },
  ];

  const hints = [
    "You need 3 pieces of state: name (the saved name), isEditing (boolean), and editValue (what's in the input while editing).",
    'When clicking "Edit": setIsEditing(true) and setEditValue(name) — copy the current name into the edit input.',
    'When clicking "Save": setName(editValue) and setIsEditing(false). Use ternary: {isEditing ? <input.../> : <span>{name}</span>}',
  ];

  // Write your solution here
  const [name, setName] = useState("Sahil");
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");
  const handleEdit = () => {
    setIsEditing(true);
  };
const handleSave=()=>{
  setName(editValue)
  setIsEditing(false)
  
}
const handleCancel=()=>{
setIsEditing(false)
}
  return (
    <div style={{ padding: 20 }}>
      <h3>Simple Edit Mode (Name Card)</h3>
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
        CRITICAL WEAK SPOT: You scored 4/10 on EditableList (edit empty) and
        5/10 on ProfileCard (edit showed below view). This is the simplest
        version: just ONE name to edit.
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
              <strong>Build a name card with view/edit toggle:</strong>
            </p>
            <ul>
              <li>
                <strong>View mode:</strong> Shows "Name: Sahil" + Edit button
              </li>
              <li>
                <strong>Edit mode:</strong> Shows input with name + Save button
                + Cancel button
              </li>
            </ul>
            <p>
              <strong>The flow:</strong>
            </p>
            <pre
              style={{
                background: "#0f172a",
                padding: 8,
                borderRadius: 4,
                fontSize: 13,
              }}
            >
              {`1. View: "Sahil" [Edit]
2. Click Edit → copy name to editValue
3. Edit: [input: "Sahil"] [Save] [Cancel]
4a. Click Save → update name, go back to view
4b. Click Cancel → discard changes, go back to view`}
            </pre>
            <p>
              <strong>Key pattern — ternary REPLACES content:</strong>
            </p>
            <pre
              style={{
                background: "#0f172a",
                padding: 8,
                borderRadius: 4,
                fontSize: 13,
              }}
            >
              {`{isEditing ? (
  <>
    <input value={editValue} onChange={e => setEditValue(e.target.value)} />
    <button onClick={handleSave}>Save</button>
    <button onClick={handleCancel}>Cancel</button>
  </>
) : (
  <>
    <span>{name}</span>
    <button onClick={handleEdit}>Edit</button>
  </>
)}`}
            </pre>
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

      {/* YOUR CODE HERE: Build the name card with edit mode */}
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
          Build your name card with edit mode here.
        </p>
        <p style={{ color: "#666", fontSize: 13 }}>
          Uncomment the useState lines and use ternary to switch between
          view/edit.
        </p>

        {isEditing ? (
          <>
            {" "}
            <input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            {" "}
            <span>{name}</span>
            <button onClick={handleEdit}>Edit</button>
          </>
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
            <h4 style={{ color: '#22c55e', marginTop: 0 }}>Edit mode with ternary works! Big improvement from Q8 (5/10) and Q14 (4/10)</h4>

            <h4 style={{ color: '#ef4444', marginTop: 16 }}>Issues</h4>
            {myMistakes.map((m, i) => (
              <div key={i} style={{ marginBottom: 10, paddingLeft: 10, borderLeft: `3px solid ${i === 0 ? '#22c55e' : '#ef4444'}` }}>
                <p style={{ margin: '4px 0', color: i === 0 ? '#86efac' : '#fca5a5', fontWeight: 'bold' }}>{i + 1}. {m.issue}</p>
                <p style={{ margin: '4px 0', color: '#d1d5db', fontSize: 14 }}>{m.detail}</p>
              </div>
            ))}

            <h4 style={{ color: '#22c55e', marginTop: 16 }}>The Fix</h4>
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
