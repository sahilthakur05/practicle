// Q7: Accordion / FAQ (Single & Multi Open)
// Build your solution here

import { useState } from "react";

const faqData = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It lets you create reusable UI components and efficiently update the DOM using a virtual DOM.",
  },
  {
    question: "What is the difference between state and props?",
    answer:
      "Props are passed from parent to child and are read-only. State is managed within a component and can be updated using useState or setState.",
  },
  {
    question: "What are React hooks?",
    answer:
      "Hooks are functions that let you use state and lifecycle features in functional components. Common hooks include useState, useEffect, useRef, and useContext.",
  },
  {
    question: "What is the virtual DOM?",
    answer:
      "The virtual DOM is a lightweight copy of the real DOM. React compares changes in the virtual DOM and only updates the parts of the real DOM that actually changed.",
  },
  {
    question: "What is useEffect used for?",
    answer:
      "useEffect lets you run side effects in functional components — like fetching data, setting up subscriptions, or manually changing the DOM. It runs after every render by default.",
  },
];

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: 640,
    margin: "40px auto",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
  },
  heading: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 8,
    color: "#1a1a2e",
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 24,
  },
  modeToggle: {
    display: "inline-flex",
    gap: 8,
    marginBottom: 24,
    background: "#f0f0f5",
    borderRadius: 8,
    padding: 4,
  },
  modeBtn: {
    padding: "6px 16px",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 500,
    background: "transparent",
    color: "#555",
  },
  modeBtnActive: {
    background: "#6c5ce7",
    color: "#fff",
  },
  item: {
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
    border: "1px solid #e8e8ef",
  },
  questionBtn: {
    width: "100%",
    padding: "16px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: 15,
    fontWeight: 600,
    color: "#1a1a2e",
    textAlign: "left" as const,
  },
  chevron: {
    fontSize: 18,
    color: "#aaa",
    flexShrink: 0,
    marginLeft: 12,
  },
  answer: {
    padding: "0 20px 16px",
    fontSize: 14,
    lineHeight: 1.7,
    color: "#555",
    background: "#fff",
  },
};

export default function Accordion() {
  const [activeBtn, setActiveBtn] = useState("single");
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [multiIndexes, setMultiIndexes] = useState<Set<number>>(new Set());

  const handleToggle = (index: number) => {
    if (activeBtn === "single") {
      setActiveIndex(activeIndex === index ? null : index);
    } else {
      setMultiIndexes((prev) => {
        const next = new Set(prev);
        if (next.has(index)) next.delete(index);
        else next.add(index);
        return next;
      });
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Accordion / FAQ (Single & Multi Open)</h2>
      <p style={styles.subtitle}>Click a question to reveal the answer</p>

      <div style={styles.modeToggle}>
        <button
          style={{ ...styles.modeBtn, ...(activeBtn === "single" ? styles.modeBtnActive : {}) }}
          onClick={() => { setActiveBtn("single"); setMultiIndexes(new Set()); }}
        >
          Single
        </button>
        <button
          style={{ ...styles.modeBtn, ...(activeBtn === "multiple" ? styles.modeBtnActive : {}) }}
          onClick={() => { setActiveBtn("multiple"); setActiveIndex(null); }}
        >
          Multiple
        </button>
      </div>

      <div>
        {faqData.map((data, index) => (
          <div key={index} style={styles.item}>
            <button
              style={styles.questionBtn}
              onClick={() => handleToggle(index)}
            >
              {data.question}
              <span style={styles.chevron}>▾</span>
            </button>
            {((activeBtn === "single" && activeIndex === index) ||
              (activeBtn === "multiple" && multiIndexes.has(index))) && (
              <div style={styles.answer}>{data.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
