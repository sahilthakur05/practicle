// Day 1 Extra - Q12: FizzBuzz
// Practice: Return values, edge cases — you returned 0 instead of max in Q2!

import { useState } from "react";

export default function Day1_FizzBuzz() {
  const [result, setResult] = useState<string>("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const myMistakes = [
    { issue: 'Used console.log instead of pushing to array', detail: 'Lines like console.log(index, "FizzBuzz") only print to console — they don\'t add anything to the result array. You need arr.push("FizzBuzz") instead.' },
    { issue: 'Missing else-if — all conditions run independently', detail: 'Using separate if statements means a number like 15 hits ALL three checks (% 3 && % 5, % 3, % 5). You need if/else if/else if/else so only ONE branch runs per number.' },
    { issue: 'Pushing number (index) instead of string', detail: 'arr.push(index) pushes a number. The function should return string[]. Use arr.push(String(index)) for the default case.' },
    { issue: 'Return type mismatch', detail: 'Function signature says string[] but you\'re pushing numbers. TypeScript should catch this — always check your return type matches what you actually return.' },
  ];

  const betterApproaches = [
    { title: 'Correct with if/else if chain', code: 'for (let i = 1; i <= n; i++) {\n  if (i % 3 === 0 && i % 5 === 0) arr.push("FizzBuzz");\n  else if (i % 3 === 0) arr.push("Fizz");\n  else if (i % 5 === 0) arr.push("Buzz");\n  else arr.push(String(i));\n}\nreturn arr;' },
    { title: 'String concatenation approach', code: 'for (let i = 1; i <= n; i++) {\n  let s = "";\n  if (i % 3 === 0) s += "Fizz";\n  if (i % 5 === 0) s += "Buzz";\n  arr.push(s || String(i));\n}\nreturn arr;' },
  ];

  const hints = [
    "Use the modulo operator (%). If n % 3 === 0, the number is divisible by 3. If n % 5 === 0, divisible by 5.",
    'Check for BOTH first (n % 3 === 0 && n % 5 === 0 → "FizzBuzz"), THEN check 3 only, THEN 5 only, THEN the number. Order matters!',
    "Push each result into an array. Convert number to string: String(i). Return the ARRAY at the end — don't forget to return!",
  ];

  function fizzBuzz(n: number): string[] {
    console.log(n);
    let arr = [];
    // For numbers 1 to n:
    // - divisible by 3 AND 5: push "FizzBuzz"
    // - divisible by 3 only: push "Fizz"
    // - divisible by 5 only: push "Buzz"
    // - otherwise: push the number as string
    // Return the array
    // Write your solution here
   for (let i = 1; i <= n; i++) {
     if (i % 3 === 0 && i % 5 === 0) arr.push("FizzBuzz");
     else if (i % 3 === 0) arr.push("Fizz");
     else if (i % 5 === 0) arr.push("Buzz");
     else arr.push(String(i));
   }
   return arr;
  }

  const handleRun = () => {
    const output = fizzBuzz(15);
    setResult(`fizzBuzz(15) →\n[${output.map((s) => `"${s}"`).join(", ")}]`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>FizzBuzz</h3>
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
        WEAK SPOT: In Q2 you wrote the logic but returned 0 instead of max. This
        drills getting return values right and proper conditionals.
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
              <strong>Classic interview question!</strong>
            </p>
            <p>Loop from 1 to n. For each number, decide what to output:</p>
            <ul>
              <li>
                <strong>15</strong> → divisible by both 3 and 5 →{" "}
                <code>"FizzBuzz"</code>
              </li>
              <li>
                <strong>9</strong> → divisible by 3 only → <code>"Fizz"</code>
              </li>
              <li>
                <strong>10</strong> → divisible by 5 only → <code>"Buzz"</code>
              </li>
              <li>
                <strong>7</strong> → not divisible by either → <code>"7"</code>
              </li>
            </ul>
            <p>
              <strong>Key concept:</strong> <code>n % 3 === 0</code> means "n
              divided by 3 has no remainder"
            </p>
            <p>
              <strong>Order matters!</strong> Check "both" FIRST. If you check
              "3" first, you'll never reach "both".
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
        {`fizzBuzz(15) → ["1","2","Fizz","4","Buzz","Fizz","7","8",
"Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]`}
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
