// Day 1 - Q3: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

import { useState } from "react";

export default function Day1_CountVowels() {
  const [result, setResult] = useState<string>("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const myMistakes = [
    { issue: 'Missing "e" from vowels array!', detail: 'Wrote ["a", "i", "o", "u"] — forgot "e". So countVowels("hello") returns 1 instead of 2. Always double-check your data constants.' },
    { issue: 'Console logs everywhere', detail: 'Lines 24, 26, 30, 33 all have console.log — remove all debugging logs before finalizing.' },
    { issue: 'No .toLowerCase() handling', detail: 'If input is "JavaScript" (capital letters), uppercase vowels like "A" won\'t be caught. Always normalize case first.' },
    { issue: 'Unnecessary .split("")', detail: 'You can loop directly over a string with for...of or access characters with str[i]. No need to convert to array first.' },
  ];

  const betterApproaches = [
    { title: 'Clean for...of loop', code: 'const vowels = "aeiou";\nlet count = 0;\nfor (const char of str.toLowerCase()) {\n  if (vowels.includes(char)) count++;\n}\nreturn count;' },
    { title: 'Regex one-liner', code: 'const matches = str.match(/[aeiou]/gi);\nreturn matches ? matches.length : 0;' },
  ];

  const hints = [
    'Create a variable count = 0. Make a string or array of vowels: "aeiou".',
    "Loop through each character in the string. Convert to lowercase first.",
    "For each character, check if it exists in your vowels string using .includes(). If yes, count++. Return count at the end.",
  ];

  function countVowels(str: string): number {
    // Write your solution here
    let vowels = ["a", "i", "o", "u"];
    let count = 0;
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
      console.log(i, arr[i]);
      if (vowels.includes(arr[i])) {
        count = count + 1;
        console.log(count);
        // return count;
      }
    }
    console.log("count", count);

    console.log(arr);

    return count;
  }

  const testInput = "javascript";

  const handleRun = () => {
    const output = countVowels(testInput);
    setResult(`countVowels("${testInput}") → ${output}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Count Vowels in a String</h3>

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
              Vowels are the letters: <strong>a, e, i, o, u</strong>. Count how
              many of these appear in a word.
            </p>
            <p>
              Example: <code>"javascript"</code> → has <code>a</code>,{" "}
              <code>a</code>, <code>i</code> → answer is <strong>3</strong>.
            </p>
            <p>
              <strong>Real life example:</strong> Like counting how many red
              balls are in a bag of mixed colored balls.
            </p>
            <p>
              <strong>What you need to know:</strong>
            </p>
            <ul>
              <li>
                <code>"aeiou".includes(char)</code> — checks if a character is a
                vowel
              </li>
              <li>
                <code>.toLowerCase()</code> — converts "A" to "a" so we catch
                both cases
              </li>
              <li>
                <code>for...of</code> loop — goes through each character in a
                string
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
        {`Input: "javascript"\nExpected Output: 3  (the vowels are: a, a, i)`}
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
          {showFeedback ? 'Hide Feedback' : 'My Mistakes & Feedback (Score: 6/10)'}
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
