import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { dailySets } from '../data/dailyPractice'

const typeLabel: Record<string, string> = {
  js: 'JavaScript',
  react: 'React',
  project: 'Mini Project',
  bonus: 'Bonus Challenge',
}

const typeColor: Record<string, string> = {
  js: '#f59e0b',
  react: '#3b82f6',
  project: '#8b5cf6',
  bonus: '#ef4444',
}

const difficultyColor: Record<string, string> = {
  Easy: '#22c55e',
  Medium: '#f59e0b',
  Hard: '#ef4444',
}

export default function DailyPracticePage() {
  const { day } = useParams()
  const dayNum = Number(day)
  const set = dailySets.find((s) => s.day === dayNum)
  const [openHints, setOpenHints] = useState<Set<number>>(new Set())
  const [completed, setCompleted] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem(`daily-completed-${dayNum}`)
      return saved ? new Set(JSON.parse(saved)) : new Set()
    } catch { return new Set() }
  })

  if (!set) {
    return (
      <div className="page">
        <h2>Day not found</h2>
        <Link to="/daily">← Back to Daily Practice</Link>
      </div>
    )
  }

  const toggleHint = (id: number) => {
    setOpenHints((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleCompleted = (id: number) => {
    setCompleted((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      localStorage.setItem(`daily-completed-${dayNum}`, JSON.stringify([...next]))
      return next
    })
  }

  const jsQuestions = set.questions.filter(q => q.type === 'js')
  const reactQuestions = set.questions.filter(q => q.type === 'react')
  const projectQuestions = set.questions.filter(q => q.type === 'project')
  const bonusQuestions = set.questions.filter(q => q.type === 'bonus')

  const completedCount = completed.size
  const totalCount = set.questions.length
  const progress = Math.round((completedCount / totalCount) * 100)

  const renderQuestion = (q: typeof set.questions[0], index: number) => (
    <div
      key={q.id}
      className={`dpq-card ${completed.has(q.id) ? 'dpq-done' : ''}`}
    >
      <div className="dpq-card-header">
        <button
          className={`dpq-check ${completed.has(q.id) ? 'dpq-checked' : ''}`}
          onClick={() => toggleCompleted(q.id)}
          title={completed.has(q.id) ? 'Mark incomplete' : 'Mark complete'}
        >
          {completed.has(q.id) ? '✓' : ''}
        </button>
        <span className="dpq-num">Q{index + 1}</span>
        <h3 className="dpq-title">
          <Link to={`/daily/${set.day}/${q.id}`} className="question-link">{q.title}</Link>
        </h3>
        <span
          className="difficulty"
          style={{ color: difficultyColor[q.difficulty], borderColor: difficultyColor[q.difficulty] }}
        >
          {q.difficulty}
        </span>
      </div>

      <div className="dpq-body">
        <p className="dpq-desc">{q.description}</p>
        <Link to={`/daily/${set.day}/${q.id}`} className="start-btn" style={{ display: 'inline-block', marginTop: 8, fontSize: 13 }}>
          Start Coding →
        </Link>

        {q.input && (
          <div className="dpq-io">
            <div className="dpq-io-label">Input:</div>
            <pre className="dpq-code">{q.input}</pre>
          </div>
        )}

        {q.output && (
          <div className="dpq-io">
            <div className="dpq-io-label">Output:</div>
            <pre className="dpq-code">{q.output}</pre>
          </div>
        )}

        {q.constraints && q.constraints.length > 0 && (
          <div className="dpq-constraints">
            <div className="dpq-io-label">Constraints:</div>
            <ul className="dpq-constraint-list">
              {q.constraints.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        {q.hints && q.hints.length > 0 && (
          <>
            <button className="hint-btn" onClick={() => toggleHint(q.id)}>
              {openHints.has(q.id) ? 'Hide Hints' : 'Show Hints'}
            </button>
            {openHints.has(q.id) && (
              <div className="hint" style={{ marginTop: 10 }}>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {q.hints.map((h, i) => (
                    <li key={i} style={{ marginBottom: 4 }}>{h}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )

  return (
    <div className="page">
      <Link to="/daily" className="back-link">← Back to Daily Practice</Link>

      <div className="dpq-page-header">
        <span className="dp-day-badge dp-day-badge-lg">Day {set.day}</span>
        <h1>{set.title}</h1>
        <span className="dp-date">{set.date}</span>
      </div>

      <div className="dpq-progress">
        <div className="dpq-progress-bar">
          <div className="dpq-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="dpq-progress-text">{completedCount}/{totalCount} completed</span>
      </div>

      {jsQuestions.length > 0 && (
        <div className="dpq-section">
          <div className="dpq-section-header">
            <span className="dpq-section-icon" style={{ background: `${typeColor.js}20`, color: typeColor.js }}>JS</span>
            <h2 className="dpq-section-title">{typeLabel.js} Logic</h2>
          </div>
          {jsQuestions.map((q, i) => renderQuestion(q, i))}
        </div>
      )}

      {reactQuestions.length > 0 && (
        <div className="dpq-section">
          <div className="dpq-section-header">
            <span className="dpq-section-icon" style={{ background: `${typeColor.react}20`, color: typeColor.react }}>R</span>
            <h2 className="dpq-section-title">{typeLabel.react} Logic</h2>
          </div>
          {reactQuestions.map((q, i) => renderQuestion(q, jsQuestions.length + i))}
        </div>
      )}

      {projectQuestions.length > 0 && (
        <div className="dpq-section">
          <div className="dpq-section-header">
            <span className="dpq-section-icon" style={{ background: `${typeColor.project}20`, color: typeColor.project }}>P</span>
            <h2 className="dpq-section-title">{typeLabel.project}</h2>
          </div>
          {projectQuestions.map((q, i) => renderQuestion(q, jsQuestions.length + reactQuestions.length + i))}
        </div>
      )}

      {bonusQuestions.length > 0 && (
        <div className="dpq-section">
          <div className="dpq-section-header">
            <span className="dpq-section-icon" style={{ background: `${typeColor.bonus}20`, color: typeColor.bonus }}>★</span>
            <h2 className="dpq-section-title">{typeLabel.bonus}</h2>
          </div>
          {bonusQuestions.map((q, i) => renderQuestion(q, jsQuestions.length + reactQuestions.length + projectQuestions.length + i))}
        </div>
      )}

      <div className="dpq-concepts">
        <h3>Key Concepts to Revise Today</h3>
        <ol className="dpq-concept-list">
          {set.conceptsToRevise.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}


