import { useState } from 'react'
import { Link } from 'react-router-dom'
import { questions } from '../data/questions'

const difficultyColor: Record<string, string> = {
  Easy: '#22c55e',
  Medium: '#f59e0b',
  Hard: '#ef4444',
}

export default function Home() {
  const [openHint, setOpenHint] = useState<number | null>(null)

  return (
    <div className="app">
      <h1>Top 10 React JS Interview Practicals</h1>
      <p className="subtitle">Click on a question to open its page and start coding</p>

      <div className="questions">
        {questions.map((q) => (
          <div key={q.id} className="card">
            <div className="card-header">
              <span className="badge">Q{q.id}</span>
              <h2>
                <Link to={`/question/${q.slug}`} className="question-link">
                  {q.title}
                </Link>
              </h2>
              <span
                className="difficulty"
                style={{ color: difficultyColor[q.difficulty], borderColor: difficultyColor[q.difficulty] }}
              >
                {q.difficulty}
              </span>
            </div>
            <p className="description">{q.description}</p>
            <div className="card-actions">
              <button
                className="hint-btn"
                onClick={() => setOpenHint(openHint === q.id ? null : q.id)}
              >
                {openHint === q.id ? 'Hide Hint' : 'Show Hint'}
              </button>
              <Link to={`/question/${q.slug}`} className="start-btn">
                Start Coding →
              </Link>
            </div>
            {openHint === q.id && (
              <div className="hint">
                <strong>Hint:</strong> {q.hint}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
