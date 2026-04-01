// Day 1 - Q8: Profile Card Component
// Build a Profile Card with view/edit mode.

import { useState } from "react";

export default function Day1_ProfileCard() {
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);

  const [showFeedback, setShowFeedback] = useState(false);

  const myMistakes = [
    { issue: 'Variable shadowing: skill.map((skill) => ...)', detail: 'The .map() parameter "skill" has the same name as the state variable "skill". This shadows the outer variable. Use a different name like "s" or "item": skill.map((s) => ...)' },
    { issue: 'Edit mode shows BELOW view mode instead of replacing it', detail: 'Inputs appear underneath the name/bio text. Should use ternary: {isEditing ? <input .../> : <h2>{name}</h2>} so edit mode REPLACES view mode.' },
    { issue: 'Edit button always visible during editing', detail: 'The Edit button shows even when already in edit mode. Should hide it: {!isEditing && <button>Edit</button>}' },
    { issue: 'Stale placeholder text', detail: '"Edit button doesn\'t work yet" is still showing even though it works. Remove it.' },
    { issue: 'Empty name="" and id="" on inputs', detail: 'These attributes serve no purpose — remove them for cleaner code.' },
    { issue: 'No styling on edit inputs', detail: 'The edit inputs use default browser styling which looks out of place in the dark theme.' },
  ];

  const betterApproaches = [
    { title: 'Ternary for view/edit switching', code: '{isEditing ? (\n  <input value={name} onChange={e => setName(e.target.value)} />\n) : (\n  <h2>{name}</h2>\n)}' },
    { title: 'Conditional button', code: '{isEditing ? (\n  <button onClick={() => setIsEditing(false)}>Save</button>\n) : (\n  <button onClick={() => setIsEditing(true)}>Edit</button>\n)}' },
  ];

  const hints = [
    "You need useState for: name, bio, and isEditing (boolean). Like: const [isEditing, setIsEditing] = useState(false)",
    "When isEditing is false → show name/bio as text + Edit button. When true → show input fields + Save button.",
    "Use a ternary: {isEditing ? <input value={name} onChange={...} /> : <h2>{name}</h2>}. On Save: setIsEditing(false). On Edit: setIsEditing(true).",
  ];

  // Write your solution here
  const [name, setName] = useState("Sahil");
  const [bio, setBio] = useState("Frontend Developer");
  const [skill, setSkill] = useState(["react.js", "html", "css"]);
  const [isEditing, setIsEditing] = useState(false);
  const handleSave = () => {
    setIsEditing(false);
  };
  return (
    <div style={{ padding: 20 }}>
      <h3>Profile Card Component</h3>

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
              Build a card that shows someone's profile — their name, bio, and
              skills. Like a LinkedIn profile card!
            </p>
            <p>It has two modes:</p>
            <ul>
              <li>
                <strong>View mode:</strong> Shows the info as text + an "Edit"
                button
              </li>
              <li>
                <strong>Edit mode:</strong> Shows input fields where you can
                change the name/bio + a "Save" button
              </li>
            </ul>
            <p>
              <strong>What you need to know:</strong>
            </p>
            <ul>
              <li>
                <code>useState</code> — to store name, bio, and whether we're
                editing
              </li>
              <li>
                <code>
                  isEditing ? {"<input />"} : {"<p>text</p>"}
                </code>{" "}
                — ternary operator to switch between edit/view
              </li>
              <li>
                <code>onChange={(e) => setName(e.target.value)}</code> — updates
                state as user types
              </li>
            </ul>
            <p>
              <strong>
                This combines Q5 (state) + Q6 (toggle) + input handling!
              </strong>
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

      {/* YOUR CODE HERE: Build the profile card */}
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
        <h2 style={{ color: "#fff", margin: "0 0 8px 0" }}>{name}</h2>
        <p style={{ color: "#888", margin: "0 0 16px 0" }}>{bio}</p>

        <div>
          <strong style={{ color: "#aaa", fontSize: 13 }}>Skills:</strong>
          <div
            style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 }}
          >
            {skill.map((skill) => (
              <span
                key={skill}
                style={{
                  padding: "4px 10px",
                  background: "#3b82f620",
                  color: "#3b82f6",
                  borderRadius: 12,
                  fontSize: 13,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {isEditing && (
          <>
            <input
              type="text"
              name=""
              id=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />

            <button onClick={handleSave}>save</button>
          </>
        )}

        <button
          style={{
            marginTop: 16,
            padding: "8px 20px",
            background: "#3b82f6",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => setShowFeedback(!showFeedback)}
          style={{ padding: '8px 20px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
        >
          {showFeedback ? 'Hide Feedback' : 'My Mistakes & Feedback (Score: 5/10)'}
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
