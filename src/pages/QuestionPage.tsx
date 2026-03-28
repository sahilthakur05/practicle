import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
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

      <button className="hint-btn" onClick={() => setShowHint(!showHint)}>
        {showHint ? 'Hide Hint' : 'Show Hint'}
      </button>

      {showHint && (
        <div className="hint">
          <strong>Hint:</strong> {question.hint}
        </div>
      )}

      <hr className="divider" />

      <h3>Your Solution:</h3>
      <div className="solution-area">
        {Component && <Component />}
      </div>
    </div>
  )
}
