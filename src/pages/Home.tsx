import { useState } from 'react'
import { Link } from 'react-router-dom'
import { questions } from '../data/questions'

const difficultyColor: Record<string, string> = {
  Easy: '#22c55e',
  Medium: '#f59e0b',
  Hard: '#ef4444',
}

const scorecard = {
  overall: 5.5,
  areas: [
    { name: 'Approach / Thinking', score: 7, color: '#22c55e' },
    { name: 'State Management', score: 5, color: '#f59e0b' },
    { name: 'JS Methods (.map, .filter, spread)', score: 4, color: '#ef4444' },
    { name: 'Syntax / Typos', score: 3, color: '#ef4444' },
    { name: 'Async Understanding', score: 5, color: '#f59e0b' },
    { name: 'useEffect', score: 6, color: '#f59e0b' },
    { name: 'JSX / Rendering', score: 5, color: '#f59e0b' },
    { name: 'Error Handling', score: 4, color: '#ef4444' },
  ],
  topMistakes: [
    'You think correctly but code incorrectly — approach is right, implementation has bugs',
    'Typos everywhere (inputVale, fetchDatta, quentity) — slow down and double check',
    'Mutating vs creating new — .push() vs spread is the #1 React concept',
    'Type mismatches — setting array to string state, object to string state',
  ],
  toImprove: [
    'Slow down — type carefully, fewer typos',
    '.map() = update, .filter() = delete, .find() = search, [...arr, item] = add',
    'Always use finally { setLoading(false) } for loading state',
    'Always return cleanup in useEffect when using setTimeout/setInterval',
  ],
}

export default function Home() {
  const [openHint, setOpenHint] = useState<number | null>(null)
  const [showScore, setShowScore] = useState(true)

  return (
    <div className="app">
      <h1>Top 10 React JS Interview Practicals</h1>
      <p className="subtitle">Click on a question to open its page and start coding</p>

      <div className="score-section">
        <button className="score-toggle" onClick={() => setShowScore(!showScore)}>
          {showScore ? 'Hide' : 'Show'} My Progress — <strong>{scorecard.overall}/10</strong>
        </button>

        {showScore && (
          <div className="score-card">
            <div className="score-header">
              <div className="score-big">{scorecard.overall}</div>
              <div className="score-big-label">/ 10</div>
            </div>

            <div className="score-bars">
              {scorecard.areas.map((area) => (
                <div key={area.name} className="score-bar-row">
                  <span className="score-bar-label">{area.name}</span>
                  <div className="score-bar-track">
                    <div
                      className="score-bar-fill"
                      style={{ width: `${area.score * 10}%`, background: area.color }}
                    />
                  </div>
                  <span className="score-bar-value" style={{ color: area.color }}>{area.score}</span>
                </div>
              ))}
            </div>

            <div className="score-columns">
              <div className="score-col">
                <h4 className="score-col-title mistake-title">Pattern of Mistakes</h4>
                <ul className="score-col-list">
                  {scorecard.topMistakes.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
              <div className="score-col">
                <h4 className="score-col-title improve-title">To Improve (5.5 → 8)</h4>
                <ul className="score-col-list">
                  {scorecard.toImprove.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

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
            {q.rating && (
              <div className="q-rating" style={{
                borderColor: q.rating.score >= 7 ? '#22c55e' : q.rating.score >= 5 ? '#f59e0b' : '#ef4444'
              }}>
                <span className="q-rating-score" style={{
                  color: q.rating.score >= 7 ? '#22c55e' : q.rating.score >= 5 ? '#f59e0b' : '#ef4444'
                }}>
                  {q.rating.score}/10
                </span>
                <span className="q-rating-comment">{q.rating.comment}</span>
              </div>
            )}
            {!q.rating && (
              <div className="q-rating-pending">Not attempted yet</div>
            )}
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
