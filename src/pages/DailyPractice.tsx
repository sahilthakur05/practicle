import { Link } from 'react-router-dom'
import { dailySets } from '../data/dailyPractice'

const typeLabel: Record<string, string> = {
  js: 'JavaScript',
  react: 'React',
  project: 'Mini Project',
  bonus: 'Bonus',
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

export default function DailyPractice() {
  return (
    <div className="app">
      <Link to="/" className="back-link">← Back to Practicals</Link>
      <h1>Daily Practice Sets</h1>
      <p className="subtitle">JS + React questions every day — build your logic muscle</p>

      <div className="dp-days">
        {dailySets.map((set) => {
          const jsCount = set.questions.filter(q => q.type === 'js').length
          const reactCount = set.questions.filter(q => q.type === 'react').length
          const hasProject = set.questions.some(q => q.type === 'project')
          const hasBonus = set.questions.some(q => q.type === 'bonus')

          return (
            <div key={set.day} className="dp-day-card">
              <div className="dp-day-header">
                <span className="dp-day-badge">Day {set.day}</span>
                <h2>
                  <Link to={`/daily/${set.day}`} className="question-link">
                    {set.title}
                  </Link>
                </h2>
                <span className="dp-date">{set.date}</span>
              </div>

              <div className="dp-day-tags">
                <span className="dp-tag" style={{ background: `${typeColor.js}20`, color: typeColor.js }}>
                  {jsCount} JS
                </span>
                <span className="dp-tag" style={{ background: `${typeColor.react}20`, color: typeColor.react }}>
                  {reactCount} React
                </span>
                {hasProject && (
                  <span className="dp-tag" style={{ background: `${typeColor.project}20`, color: typeColor.project }}>
                    1 Project
                  </span>
                )}
                {hasBonus && (
                  <span className="dp-tag" style={{ background: `${typeColor.bonus}20`, color: typeColor.bonus }}>
                    1 Bonus
                  </span>
                )}
              </div>

              <div className="dp-day-questions">
                {set.questions.map((q) => (
                  <div key={q.id} className="dp-q-pill">
                    <span className="dp-q-type" style={{ color: typeColor[q.type] }}>
                      {typeLabel[q.type]}
                    </span>
                    <span className="dp-q-title">{q.title}</span>
                    <span
                      className="dp-q-diff"
                      style={{ color: difficultyColor[q.difficulty] }}
                    >
                      {q.difficulty}
                    </span>
                  </div>
                ))}
              </div>

              <Link to={`/daily/${set.day}`} className="start-btn dp-start-btn">
                Start Practice →
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
