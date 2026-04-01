import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { dailySets } from '../data/dailyPractice'
import type { DayFeedback } from '../data/dailyPractice'

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
  const [showProgress, setShowProgress] = useState(false)

  const getBarColor = (score: number) => {
    if (score >= 7) return '#22c55e'
    if (score >= 5) return '#f59e0b'
    return '#ef4444'
  }

  const renderScorecard = (feedback: DayFeedback) => (
    <div style={{ marginBottom: 24 }}>
      <button
        onClick={() => setShowProgress(!showProgress)}
        style={{
          width: '100%',
          padding: '12px 20px',
          background: '#8b5cf6',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
          fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'left',
        }}
      >
        {showProgress ? 'Hide' : 'Show'} My Progress — {feedback.overallScore}/10
      </button>

      {showProgress && (
        <div style={{
          marginTop: 2,
          padding: 24,
          background: '#1a1a2e',
          borderRadius: '0 0 12px 12px',
          border: '1px solid #333',
          borderTop: 'none',
        }}>
          {/* Big Score */}
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <span style={{ fontSize: 56, fontWeight: 'bold', color: getBarColor(feedback.overallScore) }}>
              {feedback.overallScore}
            </span>
            <span style={{ fontSize: 22, color: '#888' }}>/ 10</span>
          </div>

          {/* Skill Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
            {feedback.skillRatings.map((skill, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 160, textAlign: 'right', color: '#ccc', fontSize: 13, flexShrink: 0 }}>
                  {skill.label}
                </span>
                <div style={{ flex: 1, height: 10, background: '#2a2a3e', borderRadius: 5, overflow: 'hidden' }}>
                  <div style={{
                    width: `${skill.score * 10}%`,
                    height: '100%',
                    background: getBarColor(skill.score),
                    borderRadius: 5,
                    transition: 'width 0.5s ease',
                  }} />
                </div>
                <span style={{ width: 24, color: getBarColor(skill.score), fontWeight: 'bold', fontSize: 14 }}>
                  {skill.score}
                </span>
              </div>
            ))}
          </div>

          {/* Patterns & Improvements */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div>
              <h4 style={{ color: '#ef4444', marginTop: 0, marginBottom: 10 }}>Pattern of Mistakes</h4>
              <ul style={{ margin: 0, paddingLeft: 18, color: '#ccc', fontSize: 13, lineHeight: 1.8 }}>
                {feedback.patterns.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#22c55e', marginTop: 0, marginBottom: 10 }}>
                To Improve ({feedback.overallScore} → {Math.min(feedback.overallScore + 2, 10)})
              </h4>
              <ul style={{ margin: 0, paddingLeft: 18, color: '#ccc', fontSize: 13, lineHeight: 1.8 }}>
                {feedback.improvements.map((imp, i) => <li key={i}>{imp}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )

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

        {q.score != null && (
          <div style={{
            margin: '10px 0',
            padding: '8px 14px',
            background: q.score >= 7 ? '#22c55e15' : q.score >= 5 ? '#f59e0b15' : '#ef444415',
            border: `1px solid ${q.score >= 7 ? '#22c55e40' : q.score >= 5 ? '#f59e0b40' : '#ef444440'}`,
            borderRadius: 8,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
          }}>
            <span style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: q.score >= 7 ? '#22c55e' : q.score >= 5 ? '#f59e0b' : '#ef4444',
              whiteSpace: 'nowrap',
            }}>
              {q.score}/10
            </span>
            <span style={{ color: '#aaa', fontSize: 13, lineHeight: 1.5 }}>
              {q.feedbackSummary}
            </span>
          </div>
        )}

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

      {set.feedback && renderScorecard(set.feedback)}

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


