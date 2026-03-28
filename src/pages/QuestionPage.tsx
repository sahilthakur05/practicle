import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { questions } from '../data/questions'

import TodoList from './TodoList'
import DebouncedSearch from './DebouncedSearch'
import ShoppingCart from './ShoppingCart'
import FetchData from './FetchData'
import MultiStepForm from './MultiStepForm'
import UseLocalStorage from './UseLocalStorage'
import Accordion from './Accordion'
import Stopwatch from './Stopwatch'
import InfiniteScroll from './InfiniteScroll'
import ModalPortal from './ModalPortal'

const components: Record<string, React.FC> = {
  'todo-list': TodoList,
  'debounced-search': DebouncedSearch,
  'shopping-cart': ShoppingCart,
  'fetch-data': FetchData,
  'multi-step-form': MultiStepForm,
  'use-localstorage': UseLocalStorage,
  'accordion': Accordion,
  'stopwatch': Stopwatch,
  'infinite-scroll': InfiniteScroll,
  'modal-portal': ModalPortal,
}

const difficultyColor: Record<string, string> = {
  Easy: '#22c55e',
  Medium: '#f59e0b',
  Hard: '#ef4444',
}

export default function QuestionPage() {
  const { slug } = useParams()
  const [showHint, setShowHint] = useState(false)
  const [showSteps, setShowSteps] = useState(false)
  const [visibleSteps, setVisibleSteps] = useState(0)
  const [showMistakes, setShowMistakes] = useState(false)
  const [showMyMistakes, setShowMyMistakes] = useState(false)

  const storageKey = `notes-${slug}`
  const [notes, setNotes] = useState(() => {
    try { return localStorage.getItem(storageKey) || '' } catch { return '' }
  })
  const [saved, setSaved] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem(storageKey) || ''
    setNotes(stored)
    setSaved(true)
  }, [storageKey])

  const handleNotesChange = (value: string) => {
    setNotes(value)
    setSaved(false)
  }

  const handleSave = () => {
    localStorage.setItem(storageKey, notes)
    setSaved(true)
  }

  const question = questions.find((q) => q.slug === slug)
  if (!question) return <div className="page"><h2>Question not found</h2><Link to="/">← Back</Link></div>

  const Component = components[question.slug]

  return (
    <div className="page">
      <Link to="/" className="back-link">← Back to Questions</Link>

      <div className="page-header">
        <span className="badge">Q{question.id}</span>
        <h1>{question.title}</h1>
        <span
          className="difficulty"
          style={{ color: difficultyColor[question.difficulty], borderColor: difficultyColor[question.difficulty] }}
        >
          {question.difficulty}
        </span>
      </div>

      <p className="description">{question.description}</p>

      <div className="hint-actions">
        <button className="hint-btn" onClick={() => setShowHint(!showHint)}>
          {showHint ? 'Hide Hint' : 'Show Hint'}
        </button>
        <button
          className="hint-btn mistakes-btn"
          onClick={() => setShowMistakes(!showMistakes)}
        >
          {showMistakes ? 'Hide Mistakes' : 'Common Mistakes'}
        </button>
        {question.myMistakes && question.myMistakes.length > 0 && (
          <button
            className="hint-btn my-mistakes-btn"
            onClick={() => setShowMyMistakes(!showMyMistakes)}
          >
            {showMyMistakes ? 'Hide My Mistakes' : 'What I Did Wrong'}
          </button>
        )}
        <button
          className="hint-btn steps-btn"
          onClick={() => {
            if (!showSteps) {
              setShowSteps(true)
              setVisibleSteps(1)
            } else {
              setShowSteps(false)
              setVisibleSteps(0)
            }
          }}
        >
          {showSteps ? 'Hide Steps' : 'Step-by-Step Guide'}
        </button>
      </div>

      {showHint && (
        <div className="hint">
          <strong>Hint:</strong> {question.hint}
        </div>
      )}

      {showMistakes && (
        <div className="mistakes-container">
          <h4>Common Mistakes to Avoid:</h4>
          <ul className="mistakes-list">
            {question.mistakes.map((mistake, i) => (
              <li key={i} className="mistake-item">{mistake}</li>
            ))}
          </ul>
        </div>
      )}

      {showMyMistakes && question.myMistakes && (
        <div className="my-mistakes-container">
          <h4>What I Did Wrong:</h4>
          <div className="my-mistakes-list">
            {question.myMistakes.map((m, i) => (
              <div key={i} className="my-mistake-card">
                <div className="my-mistake-wrong">
                  <span className="my-mistake-label wrong-label">My Code</span>
                  <code>{m.wrong}</code>
                </div>
                <div className="my-mistake-fix">
                  <span className="my-mistake-label fix-label">Fix</span>
                  <code>{m.fix}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {question.apis && question.apis.length > 0 && (
        <div className="apis-container">
          <h4>Free APIs You Can Use:</h4>
          <div className="apis-list">
            {question.apis.map((api, i) => (
              <div key={i} className="api-card">
                <div className="api-name">{api.name}</div>
                <p className="api-desc">{api.description}</p>
                <code className="api-url">{api.url}</code>
              </div>
            ))}
          </div>
        </div>
      )}

      {showSteps && (
        <div className="steps-container">
          <h4>Step-by-Step Guide:</h4>
          <ol className="steps-list">
            {question.steps.slice(0, visibleSteps).map((step, i) => (
              <li key={i} className="step-item">{step}</li>
            ))}
          </ol>
          {visibleSteps < question.steps.length ? (
            <button
              className="next-step-btn"
              onClick={() => setVisibleSteps(visibleSteps + 1)}
            >
              Show Next Step ({visibleSteps}/{question.steps.length})
            </button>
          ) : (
            <p className="steps-done">All steps revealed!</p>
          )}
        </div>
      )}

      <hr className="divider" />

      <div className="notes-section">
        <h3>My Approach / Notes:</h3>
        <textarea
          className="notes-input"
          placeholder="Write your thought process here... How are you planning to solve this? What approach are you thinking of?"
          value={notes}
          onChange={(e) => handleNotesChange(e.target.value)}
          rows={4}
        />
        <div className="notes-footer">
          <button className="save-btn" onClick={handleSave} disabled={saved}>
            {saved ? 'Saved' : 'Save Notes'}
          </button>
          {saved && notes && <span className="saved-label">Saved to localStorage</span>}
        </div>
      </div>

      <hr className="divider" />

      <h3>Your Solution:</h3>
      <div className="solution-area">
        {Component && <Component />}
      </div>
    </div>
  )
}
