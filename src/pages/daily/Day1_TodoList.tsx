// Day 1 - Q7: Simple Todo List
// Build a todo list where you can add and delete tasks.

import { useState } from "react";

export default function Day1_TodoList() {
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const myMistakes = [
    { issue: 'Original setTodos syntax was wrong', detail: 'First wrote setTodos(input, [...todos]) — setState only takes ONE argument. Fixed to setTodos([...todos, input]). Remember: setState(newValue), not setState(a, b).' },
    { issue: 'No empty input validation', detail: 'Clicking Add with an empty input adds a blank todo. Should check: if (!input.trim()) return; before adding.' },
    { issue: 'No delete functionality', detail: 'The delete button is commented out and handleDelete function is missing. Need: setTodos(todos.filter((_, index) => index !== i))' },
    { issue: 'Stale placeholder text always visible', detail: '"Your todos will appear here..." shows even when there are todos. Should be conditional: {todos.length === 0 && <p>...</p>}' },
  ];

  const betterApproaches = [
    { title: 'Complete handleAdd with validation', code: 'const handleAdd = () => {\n  if (!input.trim()) return;\n  setTodos([...todos, input.trim()]);\n  setInput("");\n};' },
    { title: 'Delete handler', code: 'const handleDelete = (index: number) => {\n  setTodos(todos.filter((_, i) => i !== index));\n};' },
  ];

  const hints = [
    'You need TWO useState: one for the input text (useState("")), one for the todo list (useState([])). Like: const [input, setInput] = useState(""); const [todos, setTodos] = useState([])',
    'To add: setTodos([...todos, input]) then setInput("") to clear the input. The ...todos means "keep all existing todos and add the new one".',
    "To delete: setTodos(todos.filter((_, index) => index !== i)) — this removes the item at position i. Use .map() to render the list and .filter() to remove.",
  ];

  // Write your solution here
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleAdd = () => {
    setTodos([...todos,input])
    setInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Simple Todo List</h3>

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
              Build a task list app. You type a task like "Buy groceries", click
              Add, and it appears in a list below. Each item has a Delete button
              to remove it.
            </p>
            <p>
              <strong>Real life example:</strong> Like the Reminders app on your
              phone!
            </p>
            <p>
              <strong>What you need to know:</strong>
            </p>
            <ul>
              <li>
                <code>useState("")</code> — stores what the user is typing in
                the input
              </li>
              <li>
                <code>useState([])</code> — stores the list of todos (an array
                of strings)
              </li>
              <li>
                <code>[...todos, newItem]</code> — the spread operator{" "}
                <code>...</code> copies the old array and adds a new item
              </li>
              <li>
                <code>.filter()</code> — creates a new array without the deleted
                item
              </li>
              <li>
                <code>.map()</code> — loops through the array and renders each
                todo as a list item
              </li>
            </ul>
            <p>
              <strong>This combines everything from Q5 and Q6!</strong> State +
              events + rendering lists.
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

      {/* YOUR CODE HERE: Add input, Add button, and todo list */}
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <input
          type="text"
          placeholder="Type a task..."
          style={{
            padding: "8px 12px",
            flex: 1,
            borderRadius: 6,
            border: "1px solid #333",
            background: "#1a1a2e",
            color: "#fff",
            fontSize: 16,
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          style={{
            padding: "8px 20px",
            background: "#22c55e",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 16,
          }}
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <div style={{ marginTop: 16 }}>
        <p style={{ color: "#888" }}>Your todos will appear here...</p>
        {/* When working, render todos like this: */}
        {todos.map((todo, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', marginBottom: 4, background: '#1a1a2e', borderRadius: 6 }}>
            <span style={{ color: '#e0e0e0' }}>{todo}</span>
            {/* <button onClick={() => handleDelete(i)} style={{ padding: '4px 12px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}>
              Delete
            </button> */}
          </div>
        ))}
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
