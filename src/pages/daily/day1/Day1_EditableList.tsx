// Day 1 Extra - Q14: Editable Todo List (Add + Delete + Edit)
// Practice: Combines Q7 (todo) + Q8 (edit mode) — both were weak!

import { useState } from "react";

export default function Day1_EditableList() {
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const myMistakes = [
    { issue: 'Stored todos as string[] instead of objects with id', detail: 'Using string[] means you rely on array index for delete/edit, which breaks when items shift. Use { id: number, text: string }[] with Date.now() for unique IDs.' },
    { issue: 'Edit function is empty — edit not implemented', detail: 'handleEdit is defined but has no logic. You need editingId state to track which item is being edited, and editText state for the edit input value.' },
    { issue: 'Used alert() for empty input validation', detail: 'alert() blocks the UI and is bad UX. Better: just return early with if (!input.trim()) return, or show inline error text.' },
    { issue: 'console.log left in handleDelete', detail: 'Debug logs should be removed before finishing. They clutter the console and are not part of the solution.' },
    { issue: 'Fragment <> has no key — key is on inner <li>', detail: 'When mapping, the key must be on the outermost element. Use <div key={index}> or <React.Fragment key={index}> instead of <>. Also, using index as key is fragile for lists that change.' },
    { issue: 'List items and buttons are unstyled', detail: 'The edit/delete buttons are plain HTML with no styling, inconsistent with the rest of the dark-themed UI.' },
  ];

  const betterApproaches = [
    { title: 'Object-based todos with full CRUD', code: 'const [todos, setTodos] = useState<{id: number, text: string}[]>([]);\nconst [editingId, setEditingId] = useState<number | null>(null);\nconst [editText, setEditText] = useState("");\n\n// Add\nif (!input.trim()) return;\nsetTodos([...todos, { id: Date.now(), text: input.trim() }]);\n\n// Delete\nsetTodos(todos.filter(t => t.id !== id));\n\n// Edit (save)\nsetTodos(todos.map(t => t.id === editingId ? { ...t, text: editText } : t));\nsetEditingId(null);' },
    { title: 'Inline edit with conditional rendering', code: '{todos.map(todo => (\n  <div key={todo.id}>\n    {editingId === todo.id ? (\n      <>\n        <input value={editText} onChange={e => setEditText(e.target.value)} />\n        <button onClick={handleSave}>Save</button>\n        <button onClick={() => setEditingId(null)}>Cancel</button>\n      </>\n    ) : (\n      <>\n        <span>{todo.text}</span>\n        <button onClick={() => { setEditingId(todo.id); setEditText(todo.text); }}>Edit</button>\n        <button onClick={() => handleDelete(todo.id)}>Delete</button>\n      </>\n    )}\n  </div>\n))}' },
  ];

  const hints = [
    "Store todos as objects: { id: number, text: string }[]. Use an editingId state to track which todo is being edited, and editText for the edit input value.",
    "To add: check if input is empty first (if (!input.trim()) return), then setTodos([...todos, { id: Date.now(), text: input.trim() }]). Using Date.now() gives unique IDs.",
    "To edit: when clicking edit, set editingId to that todo's id and editText to its text. Show input instead of text for that item only: {editingId === todo.id ? <input.../> : <span>{todo.text}</span>}",
  ];

  // Write your solution here
  // const [input, setInput] = useState('')
  // const [todos, setTodos] = useState<{id: number, text: string}[]>([])
  // const [editingId, setEditingId] = useState<number | null>(null)
  // const [editText, setEditText] = useState('')
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const handleAdd = () => {
    if (input.trim().length === 0) {
      alert("fill the input");
    } else {
      setTodos([...todos, input]);
      setInput("");
    }
  };
  const handleDelete = (index:number) => {
    console.log(index);
    const filter = todos.filter((val, id) => id !== index);
    console.log(filter);
    setTodos([...filter]);
  };

  const handleEdit=(index:number)=>{

  }
  return (
    <div style={{ padding: 20 }}>
      <h3>Editable Todo List</h3>
      <p
        style={{
          color: "#f59e0b",
          fontSize: 13,
          margin: "0 0 12px 0",
          padding: "6px 12px",
          background: "#f59e0b15",
          borderRadius: 6,
          border: "1px solid #f59e0b30",
        }}
      >
        WEAK SPOT: Q7 had no delete + wrong setState. Q8 had broken edit mode.
        This combines both — add, delete, AND inline edit.
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
              <strong>Build a todo list with 3 operations:</strong>
            </p>
            <ul>
              <li>
                <strong>Add:</strong> Type + click Add → new todo appears
                (validate: no empty todos!)
              </li>
              <li>
                <strong>Delete:</strong> Click delete button → todo removed
                using <code>.filter()</code>
              </li>
              <li>
                <strong>Edit:</strong> Click edit → text becomes input field →
                type new text → click save → text updates
              </li>
            </ul>
            <p>
              <strong>Key patterns:</strong>
            </p>
            <ul>
              <li>
                <code>setTodos([...todos, newItem])</code> — add (spread + new
                item)
              </li>
              <li>
                <code>setTodos(todos.filter(t =&gt; t.id !== id))</code> —
                delete (filter out by id)
              </li>
              <li>
                <code>
                  setTodos(todos.map(t =&gt; t.id === id ?{" "}
                  {"{ ...t, text: newText }"} : t))
                </code>{" "}
                — edit (map + replace one)
              </li>
            </ul>
            <p>
              <strong>Remember:</strong> <code>.filter()</code> = remove,{" "}
              <code>.map()</code> = update, <code>[...arr, item]</code> = add
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

      {/* YOUR CODE HERE: Add input, buttons, and editable list */}
      <div style={{ marginTop: 16 }}>
        <div style={{ display: "flex", gap: 8 }}>
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
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            style={{
              padding: "8px 20px",
              background: "#22c55e",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
            onClick={handleAdd}
          >
            
            Add
          </button>
        </div>
        {todos.map((val, index) => (
          <>
            <li key={index}>{val}</li>
            <button onClick={() => handleEdit(index)}>edit</button>
            <button onClick={() => handleDelete(index)}>delete</button>
          </>
        ))}
        <p style={{ color: "#888", marginTop: 12 }}>
          Uncomment the useState lines and build the add/delete/edit
          functionality!
        </p>
      </div>

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
  );
}
